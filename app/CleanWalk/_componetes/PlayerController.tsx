import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { BufferGeometry, Camera, Material, Mesh, NormalBufferAttributes, Object3DEventMap, Vector3 } from "three"
import Player from "./Player"
import { useKeyboardControls } from "@react-three/drei"

const PlayerController = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>()
    const playerMeshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()

    const [_, getKeys] = useKeyboardControls()


    const currentPosition = new Vector3();
    const currentLookAt = new Vector3();
    const decceleration = new Vector3(-0.0005, -0.0001, -5.0);
    const acceleration = new Vector3(1, 0.125, 100.0);
    const velocity = new Vector3(0, 0, 0);

    const calculateIdealOffset = () => {
        const idealOffset = new Vector3(0, 20, -30);
        idealOffset.applyQuaternion(playerMeshRef.current.quaternion);
        idealOffset.add(playerMeshRef.current.position);
        return idealOffset;
    };

    const calculateIdealLookat = () => {
        const idealLookat = new Vector3(0, 10, 50);
        idealLookat.applyQuaternion(playerMeshRef.current.quaternion);
        idealLookat.add(playerMeshRef.current.position);
        return idealLookat;
    };

    function updateCameraTarget(delta: number ,camera:Camera) {
    const idealOffset = calculateIdealOffset();
    const idealLookat = calculateIdealLookat();

    const t = 1.0 - Math.pow(0.001, delta);

    currentPosition.lerp(idealOffset, t);
    currentLookAt.lerp(idealLookat, t);

    camera.position.copy(currentPosition);
  }

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