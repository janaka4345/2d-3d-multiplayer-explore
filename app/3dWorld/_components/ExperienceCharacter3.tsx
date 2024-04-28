import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody, CuboidCollider } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"



const ExperienceCharacter = () => {
    const [sub, get] = useKeyboardControls()


    const characterRef = useRef<RapierRigidBody>()
    console.log(' ran');

    useEffect(() => {
        console.log('useeffect ran');

    }, [])
    useFrame((state) => {
        const jump = get().jump
        const forward = get().forward
        const back = get().backward
        const left = get().left
        const right = get().ArrowRight
        const impulse = { x: 0.5, y: 0, z: 0 }
        const torque = { x: 0, y: 0.5, z: 0 }


        if (left) {
            // characterRef.current.applyTorqueImpulse(torque, true)
            // characterRef.current.setRotation({ x: 5, y: 8, z: 6, w: 7 }, true)
            // characterRef.current.setLinvel({ x: 1, y: 0, z: 0 }, true)
            // characterRef.current.setAngvel({ x: 3.0, y: 0.0, z: 0.0 }, true)
            characterRef.current.setNextKinematicTranslation({ x: characterRef.current.translation().x + 0.01, y: 0.5, z: 0 })
            // characterRef.current.setNextKinematicPosition({ x: 1, y: 0, z: 0 })

        }
        if (forward) {
            // characterRef.current.applyImpulse(impulse, true)

        }
        // characterRef.current.applyImpulse(impulse, true)
        // characterRef.current.applyTorqueImpulse(torque, true)

    })

    return (
        <>
            <Physics debug >
                <RigidBody type="fixed" friction={1} restitution={0}>

                    <Plane />
                </RigidBody>
                <RigidBody friction={0.4} restitution={0.5} position={[0, 1, 0]}>
                    <Cube />
                </RigidBody>
                <RigidBody type="kinematicPosition" ref={characterRef} friction={1} restitution={0} position={[0, 0.5, 0]} colliders={false}>
                    <Character castShadow position={[0, -1.5, 0]} />
                    <CapsuleCollider args={[1.05, 0.5]} />
                    {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
                </RigidBody>

            </Physics>

        </>
    )
}
export default ExperienceCharacter