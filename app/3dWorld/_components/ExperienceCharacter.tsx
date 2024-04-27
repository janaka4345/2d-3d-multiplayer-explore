import { CapsuleCollider, Physics, RigidBody } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"



const ExperienceCharacter = () => {
    const characterRef = useRef<RigidBody>()
    const [sub, get] = useKeyboardControls()
    useFrame((state) => {
        // const keys = getKeys()
        // console.log(keys);


    })
    useEffect(() => {

        return sub(
            (state) => state.forward,
            (pressed) => {
                console.log('forward', pressed)
                characterRef.current.setNextKinematicTranslation()

            }
        )


    }, [])
    return (
        <>
            <Physics debug >
                <RigidBody friction={1} restitution={0}>

                    <Plane />
                </RigidBody>
                {/* <RigidBody friction={0.4} restitution={0.5} position={[0, 1, 0]}>
                    <Cube />
                </RigidBody> */}
                <RigidBody ref={characterRef} type="kinematicPosition" friction={0.7} restitution={1} position={[0, 0.5, 0]} colliders={false}>
                    <Character castShadow position={[0, -1.5, 0]} />
                    <CapsuleCollider args={[1.05, 0.5]} />
                </RigidBody>

            </Physics>

        </>
    )
}
export default ExperienceCharacter