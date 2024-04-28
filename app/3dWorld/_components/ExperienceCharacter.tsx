import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"



const ExperienceCharacter = () => {
    const characterRef = useRef<RapierRigidBody>()
    // const [sub, get] = useKeyboardControls()
    // const jumpPressed = useKeyboardControls(state => state)
    const [sub, get] = useKeyboardControls()
    useEffect(() => {
        const subUnsub = sub(
            (state) => state.forward,
            (pressed) => {
                console.log('forward', pressed)//other way
            }
        )
        return () => { subUnsub() }


    }, [])

    useFrame((state) => {
        console.log(get().forward);//one way


        // const keys = getKeys()


    })
    // useEffect(() => {

    //     return sub(
    //         (state) => state.forward,
    //         (pressed) => {
    //             console.log('forward', pressed)
    //             // characterRef.current.add

    //         }
    //     )


    // }, [])
    return (
        <>
            <
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



        </>
    )
}
export default ExperienceCharacter