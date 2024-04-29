import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody, CuboidCollider } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { CameraControls, useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"



const ExperienceCharacter4 = () => {
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
        // cubeRef.current.setTranslation(new Vector3(cameraRef.current.camera.position.x - 4, cameraRef.current.camera.position.y, cameraRef.current.camera.position.z), true)
        // characterRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true)
        // console.log(characterRef.current.rotation());
        // console.log(cameraRef.current.lerpLookAt);



        const jump = get().jump
        const forward = get().forward
        const back = get().back
        const left = get().left
        const right = get().right

        if (characterRef.current) {
            const currentPosition = characterRef.current.translation()
            console.log({ currentPosition });

            if (left) {
                currentPosition.x += 0.1
            }
            if (right) {
                currentPosition.x -= 0.1
            }
            if (forward) {
                currentPosition.z += 0.1
            }
            if (back) {
                currentPosition.z -= 0.1
            }
            characterRef.current.setTranslation(currentPosition, true)
        }


    })

    return (
        <>
            <CameraControls ref={cameraRef} />

            <RigidBody type="fixed" friction={0.5} restitution={0.5}>

                <Plane />
            </RigidBody>
            {/* <RigidBody lockRotations type="dynamic" ref={cubeRef} friction={0.5} restitution={0.5} position={[0, 1, 0]} scale={0.5}>
                <Cube />
            </RigidBody> */}
            <RigidBody lockRotations type="dynamic" ref={characterRef} friction={0.5} restitution={0.5} position={[0, 1, 0]} colliders={false}>
                <Character castShadow position={[0, -1.5, 0]} />
                <CapsuleCollider args={[1.05, 0.5]} />
                {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
            </RigidBody>



        </>
    )
}
export default ExperienceCharacter4