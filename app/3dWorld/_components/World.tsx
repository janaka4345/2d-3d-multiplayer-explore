'use client'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
// import { Perf } from 'r3f-perf'
import Experience from "./Experience"


const World = () => {
    return (
        <Canvas shadows style={{ width: '100svw', height: '100svh' }}>
            {/* <Perf position="top-left" /> */}
            <OrbitControls />
            <directionalLight intensity={2} castShadow position={[2, 2, 2]} />
            <ambientLight />
            <Experience />
        </Canvas>
    )
}
export default World