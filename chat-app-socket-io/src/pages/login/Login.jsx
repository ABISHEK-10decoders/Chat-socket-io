import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../login/login.css"

const Login = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("")

    return (
        <div className="bg">
            <div className=" container "  >
                <div style={{ padding: '200px' }}>
                    <div className="  " >

                        <h2 style={{ paddingLeft: "300px" }}> Login Page</h2>
                    </div>
                    <form className='container w-80' style={{ paddingTop: '100px' }}>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Enter your Name</label>
                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Room</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setRoom(e.target.value)} />
                        </div>
                        <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                            <button type="submit" class="btn btn-primary w-100" >Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login