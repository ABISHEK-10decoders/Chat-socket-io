const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const { addUsers, getUser, removeUser,
    getUserRoom } = require('./entity');
// const http = require('http');
//////
const app = express();
app.get('/', (req, res) => {
    res.json("Api is working")
})
///
// const server = http.createServer(app);

const server = app.listen(3001, () => console.log("sever working 3001"))
const io = socketio(server, {
    cors: {
        origin: '*'
    }
});
io.on('connect', (socket) => {
    console.log("User Connected");
    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room, socket.id)
        const { response, error } = addUsers({ id: socket.id, name: name, room: room })

        if (error) {
            callback(error)
            return;
        }
        socket.join(response.room);
        socket.emit('message', { user: 'admin', text: ` ${response.name} joined` });
        socket.broadcast.to(response.room).emit('message', { user: 'admin', text: ` ${response.name} has joined` });
        io.to(response.room).emit('activeUsers', getUserRoom(response.room))



    })
    socket.on('sendMsg', (message, callback) => {
        const user = getUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: user.name, text: message })
        }
        else {
            callback("User Not found")
        }
        callback()
        // io.to(user.room).emit('message', {})

    })

    socket.on('disconnect', (socket) => {
        console.log("User disconnect");
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: ` ${user.name} has left` })
            io.to(user.room).emit('activeUsers', getUserRoom(user.room))
        }
    })
})
