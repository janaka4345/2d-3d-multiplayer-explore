import { createServer } from 'node:http'
import next from 'next'
import { Server } from 'socket.io'

//user state practicaly from database
const usersState = {
    users: [],
    setUsers: (userArray) => {
        this.user = userArray
    }
}

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const ADMIN = "ADMIN"
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handler = app.getRequestHandler()

app.prepare().then(() => {
    const httpServer = createServer(handler)

    const io = new Server(httpServer)

    io.on('connection', (socket) => {

        //to login user only
        socket.emit('message', 'welcome to the server')

        //to other login users only
        socket.broadcast.emit('message', `${socket.id} joinesd the server`)

        //listening for messages
        socket.on('message', data => {
            console.log(data);
            io.emit('message', data)
        })

        //listening for rooms
        socket.on('join', data => {
            console.log(data);
        })
    })

    httpServer
        .once('error', (err) => {
            console.error(err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`)
        })
})

function message(name, message) {
    return {
        name, message, time: new Intl.DateTimeFormat(
            'default', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
        ).format(new Date())
    }
}

// handling user functions
function addUser(id, name, room) {
    const user = { id, name, room }
    usersState.setUsers([...usersState.users.filter(user => user.id != id), user])
    return user
}

function userRemove(id) {
    usersState.setUsers(usersState.users.filter(user => user.id != id))
}

function getUser(id) {
    const user = usersState.users.find(user => user.id === id)
    return user
}

function getUserInRoom(room) {
    const user = usersState.users.filter(user => user.room === room)
    return user
}

function getActiveRooms() {
    // setuop func
    return null
}