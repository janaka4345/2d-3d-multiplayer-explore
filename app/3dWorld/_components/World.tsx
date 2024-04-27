'use client'
import { Canvas } from "@react-three/fiber"
import { KeyboardControls, KeyboardControlsEntry, OrbitControls } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import Experience from "./Experience"
import Experience2 from "./Experience2"
import ExperiencePhysics from "./ExperiencePhysics"
import { Vector3 } from "three"
import ExperienceCharacter from "./ExperienceCharacter"
import { useMemo } from "react"


const World = () => {
    enum Controls {
        forward = 'forward',
        back = 'back',
        left = 'left',
        right = 'right',
        jump = 'jump',
    }
    const map = useMemo<KeyboardControlsEntry<Controls>[]>(() => [
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], [])
    return (
        <KeyboardControls map={map}>
            <Canvas shadows style={{ width: '100svw', height: '100svh' }}>
                <Perf position="top-left" />
                <OrbitControls />
                <directionalLight intensity={2} castShadow position={[5, 5, 5]} />
                <ambientLight />
                {/* <Experience /> */}
                {/* <Experience2 /> */}
                {/* <ExperiencePhysics /> */}
                <ExperienceCharacter />
            </Canvas>
        </KeyboardControls>
    )
}
export default World