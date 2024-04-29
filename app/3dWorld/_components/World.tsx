'use client'
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Perf } from 'r3f-perf'
import { useEffect, useMemo, useState } from "react"
import FlyControlsDem from "./FlyControlsDem"
import ExperienceCharacter from "./ExperienceCharacter3"
import ExperienceCharacter4 from "./ExperienceCharacter4"


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
    useEffect(() => {
        // console.log('cameraref', cameraRef.current);


        return () => {

        }
    }, [])


    return (
        <>
            {/* <button onClick={() => setState(prev => !prev)}>click</button> */}
            <KeyboardControls map={map}>
                <Canvas
                    shadows
                    style={{ width: '100svw', height: '100svh' }}
                // camera={{ position: [0, 5, 0] }}
                >

                    <Physics debug>



                        <Perf position="top-right" />
                        {/* <OrbitControls /> */}
                        <directionalLight intensity={2} castShadow position={[5, 5, 5]} />
                        <ambientLight />
                        {/* <Experience /> */}
                        {/* <Experience2 /> */}
                        {/* <ExperiencePhysics /> */}
                        {/* {state && <ExperienceCharacter />} */}
                        {/* {state && <ExperienceCharacter2 />} */}
                        {/* {state && <ExperienceCharacter />} */}
                        {/* <FlyControlsDem />*/}
                        {state && <ExperienceCharacter4 />}
                    </Physics>
                </Canvas>
            </KeyboardControls></>
    )
}
export default World