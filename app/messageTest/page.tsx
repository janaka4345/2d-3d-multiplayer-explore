'use client'
import { socket } from "@/socket";
import { MouseEventHandler, useEffect, useState } from "react";

const page = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [connectId, setConnectId] = useState('');
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [transport, setTransport] = useState("N/A");
    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);
            setConnectId(`user id:${socket.id}`)

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        socket.on('message', newData => {
            console.log(newData);
            setData(data => [...data, newData])
        })

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off('message', newData => {
                console.log('unmounted');
                setData(data => [...data, newData])
            })
        };
    }, []);
    const handleMessage: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        // console.log({ id, message });
        socket.emit('privateMessage', { id, message, senderId: socket.id })

    }

    return (
        <div>
            <p>Status: {isConnected ? "connected" : "disconnected"}</p>
            <p>Transport: {transport}</p>
            <p>connectId: {connectId}</p>
            <form className=" flex flex-col gap-1">
                <input className="border border-black w-1/2" type="text" id="id" placeholder="send to id" required onChange={e => setId(e.target.value)} /> <br />
                <input className="border border-black w-1/2" type="text" id="message" placeholder="message" required onChange={e => setMessage(e.target.value)} /> <br />
                <button id="join" type="submit" onClick={handleMessage}>Send Message</button>
            </form>
            <br />
            <br />
            <button onClick={() => setData([])}>clear pre</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>

        </div>
    )
}
export default page