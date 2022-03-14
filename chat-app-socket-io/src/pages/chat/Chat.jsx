import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import "./Chat.css";
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;

const Chat = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("")
    const [Message, setMessage] = useState([]);
    const [Inputmsg, setInputmsg] = useState("");
    const [active, setActive] = useState([])

    const backEndUrl = 'http://localhost:3001'
    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const name = params.get('name');
        const room = params.get('room');
        setName(name)
        setRoom(room)
        console.log(name, room)
        socket = io(backEndUrl)
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error)
            }

        })
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, []);
    useEffect(() => {
        socket.on('message', msg => {
            setMessage(prevMessage => [...prevMessage, msg])
        })
        socket.on('activeUsers', users => {
            setActive(users)
        });
    }, [])
    const sendMessage = () => {

        socket.emit('sendMsg', Inputmsg, () => setInputmsg(""))
        // console.log(e.target, " Target")

    }
    console.log(Inputmsg)
    console.log(active)
    console.log(Message, " Message")
    return (
        <div style={{ backgroundColor: '#e0e0d1', height: '100vh', }}>

            <h2> Chat App</h2>
            <div style={{ display: 'flex', height: '60vh', width: '50vw', margin: ' 0 auto', }}>
                <div style={{ backgroundColor: '#fff', width: '30%' }}>

                    <section className="chatBar">
                        <h4 className="online"> Online</h4>
                        {active.map((each, index) => (
                            <main key={index}>

                                <div className="chat-single">


                                    <span> {each.name}</span>
                                </div>

                            </main>
                        ))}
                    </section>
                </div>
                <div className="left-bar">
                    <ScrollToBottom>
                        <h4 className="chat-box"> Chat Box</h4>

                        <main > {Message.map((msg, idx) => (
                            <div key={idx}>
                                <div className="low-box">
                                    {/* <img src="../../asscts//p.png" alt="Avatar" className="image-box" /> */}
                                    <p>{msg.text}</p>
                                    <span class="time-right">{msg.user}</span>
                                </div>
                            </div>
                        ))}</main>
                    </ScrollToBottom>
                    <div className="input">
                        <input type="text"
                            value={Inputmsg}


                            onChange={(e) => setInputmsg(e.target.value)} className="input-text" />
                        <button onClick={() => sendMessage()} onKeyUp={(event) => event.key === "Enter" && sendMessage()} className="button"> Send </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chat