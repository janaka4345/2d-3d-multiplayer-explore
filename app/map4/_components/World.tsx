'use client'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const World = () => {
    return (
        <Canvas style={{ width: '100svw', height: '100dvh' }}>
            <OrbitControls />
            <ambientLight />
            <Environment preset='city' />
            <Experience />
        </Canvas>
    )
}

export default World