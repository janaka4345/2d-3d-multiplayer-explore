'use client'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import Experience from "./Experience"
import Experience2 from "./Experience2"
import ExperiencePhysics from "./ExperiencePhysics"


const World = () => {
    return (
        <Canvas shadows style={{ width: '100svw', height: '100svh' }}>
            <Perf position="top-left" />
            <OrbitControls />
            <directionalLight intensity={2} castShadow position={[2, 2, 2]} />
            <ambientLight />
            {/* <Experience /> */}
            {/* <Experience2 /> */}
            <ExperiencePhysics />
        </Canvas>
    )
}
export default World