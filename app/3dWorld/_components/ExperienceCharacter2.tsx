import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"



const ExperienceCharacter = () => {
    console.log('ran');
    const [sub, get] = useKeyboardControls()


    const characterRef = useRef<RapierRigidBody>()

    useEffect(() => {

        const unsubJumpSub = sub(
            (state) => state.jump,
            (pressed) => {
                console.log('jump', pressed)
            }
        )
        const unsubForwardSub = sub(
            (state) => state.forward,
            (pressed) => {
                console.log('forward', pressed)
            }
        )
        const unsubBackSub = sub(
            (state) => state.back,
            (pressed) => {
                console.log('back', pressed)
            }
        )
        const unsubLeftSub = sub(
            (state) => state.left,
            (pressed) => {
                console.log('left', pressed)
            }
        )
        const unsubRightSub = sub(
            (state) => state.right,
            (pressed) => {
                console.log('right', pressed)
            }
        )


        return () => {
            unsubJumpSub()
            unsubForwardSub()
            unsubBackSub()
            unsubLeftSub()
            unsubRightSub()
            console.log('close ran');

        }
    }, [])

    useFrame((state) => {
        // console.log({ jumpPressed, forwardPressed, backPressed, leftPressed, rightPressed });


    })
    useEffect(() => {

        // return sub(
        //     (state) => state.forward,
        //     (pressed) => {
        //         console.log('forward', pressed)
        //         // characterRef.current.add

        //     }
        // )


    }, [])
    return (
        <>

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