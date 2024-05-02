import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap, Vector3 } from "three"
import Player from "./Player"
import { useKeyboardControls } from "@react-three/drei"

const PlayerController = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>()

    const [_, getKeys] = useKeyboardControls()


    const playerMeshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()
    const currentPosition = new Vector3();
    const currentLookAt = new Vector3();
    const decceleration = new Vector3(-0.0005, -0.0001, -5.0);
    const acceleration = new Vector3(1, 0.125, 100.0);
    const velocity = new Vector3(0, 0, 0);
    useEffect(() => {
        console.log();

        return () => {

        }
    }, [])

    useFrame((state) => {
        // console.log(state);
        let [x, y, z] = [0, 0, 0]
        const jump = getKeys().jump
        const forward = getKeys().forward
        const back = getKeys().back
        const left = getKeys().left
        const right = getKeys().right
        // console.log({ forward, back, left, right, jump });


        if (left) {
            x -= 0.2
        }
        if (right) {
            x += 0.2
        }
        if (forward) {
            z -= 0.2
        }
        if (back) {
            z += 0.2
        }
        if (jump) {
            y += 0.2
        }

    })


    return (
        <>
            <RigidBody ref={characterRigidbodyRef} position={[0, 5, 0]} lockRotations colliders={false}>
                <Player ref={playerMeshRef} position={[0, -1, 0]} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody></>
    )
}
export default PlayerController