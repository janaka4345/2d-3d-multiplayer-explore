import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody, CuboidCollider } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { CameraControls, useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"



const ExperienceCharacter = () => {
    const [sub, get] = useKeyboardControls()


    const characterRef = useRef<RapierRigidBody>()
    const cubeRef = useRef<RapierRigidBody>()
    const cameraRef = useRef<CameraControls>()
    console.log(' ran');

    useEffect(() => {
        console.log('useeffect ran');

    }, [])
    useFrame((state) => {
        // console.log(cameraRef.current.camera.position);
        cubeRef.current.setTranslation(new Vector3(cameraRef.current.camera.position.x - 4, cameraRef.current.camera.position.y, cameraRef.current.camera.position.z), true)

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
            <CameraControls ref={cameraRef} />

            <RigidBody type="fixed" friction={1} restitution={0}>

                <Plane />
            </RigidBody>
            <RigidBody gravityScale={0} lockRotations type="dynamic" ref={cubeRef} friction={0.4} restitution={0.5} position={[0, 1, 0]} scale={0.5}>
                <Cube />
            </RigidBody>
            <RigidBody type="kinematicPosition" ref={characterRef} friction={1} restitution={0} position={[0, 0.5, 0]} colliders={false}>
                <Character castShadow position={[0, -1.5, 0]} />
                <CapsuleCollider args={[1.05, 0.5]} />
                {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
            </RigidBody>



        </>
    )
}
export default ExperienceCharacter