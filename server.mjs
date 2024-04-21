import { createServer } from 'node:http'
import next from 'next'
import { Server } from 'socket.io'

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
