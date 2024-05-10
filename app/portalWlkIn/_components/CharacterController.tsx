import { CapsuleCollider, type RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier"
import Player from "./Player"
import { useRef } from "react"
import { Vector3, type Mesh, BufferGeometry, Object3DEventMap, NormalBufferAttributes, Material, Quaternion, QuaternionKeyframeTrack, Euler } from "three"
import { useFrame } from "@react-three/fiber"
import { CameraControls, useKeyboardControls } from "@react-three/drei"
import { lerp } from "three/src/math/MathUtils.js"

const CharacterController = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>()
    const characterMeshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()
    const cameraRef = useRef<CameraControls>()

    const [_, getKeys] = useKeyboardControls()

    useFrame((state) => {
        let [x, y, z] = [0, 0, 0]
        const jump = getKeys().jump
        const forward = getKeys().forward
        const back = getKeys().back
        const left = getKeys().left
        const right = getKeys().right
        // console.log({ forward, back, left, right, jump });
        console.log(characterMeshRef.current);


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
        const position = vec3(characterRigidbodyRef.current.translation())
        characterRigidbodyRef.current.applyImpulse({ x, y, z }, true)

        cameraRef.current.setLookAt(position.x, position.y + 5, position.z + 5, position.x, position.y + 1.5, position.z)


    })

    return (
        <>
            <CameraControls ref={cameraRef} />

            <RigidBody ref={characterRigidbodyRef} type="dynamic" colliders={false} position={[0, 5, 0]} lockRotations>
                <Player ref={characterMeshRef} position={[0, -1, 0]} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody></>
    )
}
export default CharacterController