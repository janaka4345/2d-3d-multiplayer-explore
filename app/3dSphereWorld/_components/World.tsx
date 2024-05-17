'use client'
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { Environment, OrbitControls } from "@react-three/drei"

const World = () => {
    return (
        <Canvas style={{ width: '100svw', height: '100svh' }}>
            <ambientLight />

            <directionalLight />
            <OrbitControls />
            <Experience />

        </Canvas>
    )
}
export default World