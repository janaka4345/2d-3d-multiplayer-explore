'use client'
import { Canvas } from "@react-three/fiber"
import { KeyboardControls, KeyboardControlsEntry, OrbitControls } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import Experience from "./Experience"
import Experience2 from "./Experience2"
import ExperiencePhysics from "./ExperiencePhysics"
import { Vector3 } from "three"
import ExperienceCharacter from "./ExperienceCharacter"
import ExperienceCharacter2 from "./ExperienceCharacter2"
import ExperienceCharacter3 from "./ExperienceCharacter3"
import { useMemo, useState } from "react"


const World = () => {
    const [state, setState] = useState(true)
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
        <>
            <button onClick={() => setState(prev => !prev)}>click</button>
            <KeyboardControls map={map}>
                <Canvas shadows style={{ width: '100svw', height: '100svh' }}>
                    <Perf position="top-right" />
                    <OrbitControls />
                    <directionalLight intensity={2} castShadow position={[5, 5, 5]} />
                    <ambientLight />
                    {/* <Experience /> */}
                    {/* <Experience2 /> */}
                    {/* <ExperiencePhysics /> */}
                    {/* {state && <ExperienceCharacter />} */}
                    {state && <ExperienceCharacter2 />}
                    {/* {state && <ExperienceCharacter3 />} */}
                </Canvas>
            </KeyboardControls></>
    )
}
export default World