"use client";
// import PropTypes from 'prop-types'

import { MouseEventHandler, useEffect, useState } from "react";
import { socket } from "@/socket";
const page = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState<string>('john');
    const [room, setRoom] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [transport, setTransport] = useState("N/A");

    useEffect(() => {
        if (socket.connected) {
            onConnect();
            console.log(socket.id);

        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

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
                console.log(newData);
                setData(data => [...data, newData])
            })
        };
    }, []);

    const handleJoin: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log({ name, room });
        socket.emit('singlePerson', { name, room })

    }
    const handleSend: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log({ message });

        socket.emit('message', { message, id: socket.id })

    }

    const handleRoomJoin = () => {
        socket.emit('roorms', { message, id: socket.id })
    }

    return (
        <div>
            <p>Status: {isConnected ? "connected" : "disconnected"}</p>
            <p>Transport: {transport}</p>
            <form className=" flex flex-col gap-1">
                <input className="border border-black w-1/2" type="text" id="name" maxLength={50} placeholder="send id" size={50} required onChange={e => setName(e.target.value)} /> <br />
                <input className="border border-black w-1/2" type="text" id="room" placeholder="message" size={5} required onChange={e => setRoom(e.target.value)} /> <br />
                <button id="join" type="submit" onClick={handleJoin}>Join</button>
            </form>
            <br />
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <form className=" flex flex-col gap-1">
                <input className="border border-black w-1/2" type="text" id="message" placeholder="Your message" required onChange={e => setMessage(e.target.value)} /> <br />
                <button type="submit" onClick={handleSend}>Send</button>
            </form>
            <button onClick={handleRoomJoin}>joined room</button>
        </div>
    );
}
// page.propTypes = {}
export default page