let users = [];

const addUsers = ({ id, name, room }) => {
    if (!name || !room) {
        return { error: 'Fill the Name and room' }
    }
    name = name.trim()?.toLowerCase()
    room = room.trim()?.toLowerCase();

    if (users.length) {
        const existingUsers = users.find(each => each.name === name && each.room === room)
        if (existingUsers) {
            return { error: "User already exists" }
        }
    }
    const response = { id, name, room }
    users.push(response)
    return { response }

}
const removeUser = (id) => {
    const findIndex = users.findIndex(each => each.id == id);

    if (findIndex >= 0) {
        return users.splice(findIndex, 1)[0]
    }

}
const getUser = (id) => {
    return users.find(each => each.id == id);



}
const getUserRoom = (room) => {
    return users.filter(each => each.room == room)
}
module.exports = {
    addUsers,
    getUser,
    removeUser,
    getUserRoom
}