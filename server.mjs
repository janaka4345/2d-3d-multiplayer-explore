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
        // socket.emit('message', message(ADMIN, 'welcome to the app'))

        //to other login users only
        // socket.broadcast.emit('message', message(ADMIN, `${socket.id} joined the app`))

        //listening for messages
        socket.on('message', data => {
            console.log(data);
            socket.broadcast.emit('message', message(data.id, data.message))
        })

        //listening for rooms
        socket.on('generalRoom', data => {
            socket.join("generalRoom")
            console.log(data);
        })
        socket.on('roorms', data => {
            console.log('roorms');
            console.log(socket);
        })
        socket.on('singlePerson', data => {
            console.log('singlePerson:', data);
            socket.to(data.name).emit("message", data.room)

        })
        socket.on('join room', data => {
            console.log(data);
            socket.join(data.room)
            // io.to(data.id).emit("message", data)

        })

        socket.on('privateMessage', data => {
            console.log('privateMessage:', data);
            socket.to(data.id).emit("message", data)

        })
        socket.on('callbackMessage', (data, callback) => {
            console.log('callbackMessage:', data);
            callback('supppp')
            // socket.to(data.id).emit("message", data)

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