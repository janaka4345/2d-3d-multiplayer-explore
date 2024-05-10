import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RapierRigidBody, RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { AnimationAction, BufferGeometry, Camera, Material, Mesh, NormalBufferAttributes, Object3DEventMap, Quaternion, Vector3 } from "three"
import Player from "./Player"
import { useKeyboardControls } from "@react-three/drei"

type Animations = {
    [name: string]: {
        clip: AnimationAction;
    };
}

const PlayerController = () => {

    const characterRigidbodyRef = useRef<RapierRigidBody>()
    const playerMeshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()

    const [_, getKeys] = useKeyboardControls()


    const currentPosition = new Vector3();
    const currentLookAt = new Vector3();
    const deceleration = new Vector3(-0.0005, -0.0001, -5.0);
    const acceleration = new Vector3(1, 0.125, 10.0);
    const velocity = new Vector3(0, 0, 0);

    const animations: Animations = {};


    // set current Action
    // let currAction = animations["idle"].clip;
    let currAction: AnimationAction;

    let prevAction: AnimationAction;

    const calculateIdealOffset = () => {
        const idealOffset = new Vector3(-1, 0.6, -3);
        idealOffset.applyQuaternion(playerMeshRef.current.quaternion);
        idealOffset.add(characterRigidbodyRef.current.translation());
        return idealOffset;
    };

    const calculateIdealLookat = () => {
        const idealLookat = new Vector3(0, 2, 5);
        idealLookat.applyQuaternion(playerMeshRef.current.quaternion);
        idealLookat.add(characterRigidbodyRef.current.translation());
        return idealLookat;
    };

    function updateCameraTarget(delta: number, camera: Camera) {

        const idealOffset = calculateIdealOffset();
        const idealLookat = calculateIdealLookat();

        const t = 1.0 - Math.pow(0.001, delta);

        currentPosition.lerp(idealOffset, t);
        currentLookAt.lerp(idealLookat, t);

        camera.position.copy(currentPosition);
        console.log(playerMeshRef.current);



    }


    // movement
    const characterState = ({ delta, forward, back, left, right, camera }: { delta: number, forward: boolean, back: boolean, left: boolean, right: boolean, camera: Camera }) => {
        const newVelocity = velocity;
        const frameDeceleration = new Vector3(
            newVelocity.x * deceleration.x,
            newVelocity.y * deceleration.y,
            newVelocity.z * deceleration.z
        );
        frameDeceleration.multiplyScalar(delta);
        frameDeceleration.z =
            Math.sign(frameDeceleration.z) *
            Math.min(Math.abs(frameDeceleration.z), Math.abs(newVelocity.z));

        newVelocity.add(frameDeceleration);

        const controlObjectBody = characterRigidbodyRef.current; //check TODO
        const controlObjectMesh = playerMeshRef.current;
        const _Q = new Quaternion();
        const _A = new Vector3();
        const _R = controlObjectMesh.quaternion.clone();

        const acc = acceleration.clone();
        // if (activeAnimation.run) {
        //     acc.multiplyScalar(2.0);
        // }

        // if (currAction === animations["dance"].clip) {
        //     acc.multiplyScalar(0.0);
        // }

        if (forward) {
            newVelocity.z += acc.z * delta;
        }
        if (back) {
            newVelocity.z -= acc.z * delta;
        }
        if (left) {
            _A.set(0, 1, 0);
            _Q.setFromAxisAngle(_A, 4.0 * Math.PI * delta * acceleration.y);
            _R.multiply(_Q);
        }
        if (right) {
            _A.set(0, 1, 0);
            _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * delta * acceleration.y);
            _R.multiply(_Q);
        }

        controlObjectMesh.quaternion.copy(_R);

        const oldPosition = new Vector3();
        const newPosition = new Vector3();
        oldPosition.copy(controlObjectBody.translation());

        // console.log(oldPosition);//DELETE


        const mforward = new Vector3(0, 0, 1);
        mforward.applyQuaternion(controlObjectMesh.quaternion);
        mforward.normalize();
        // console.log(mforward);//DELETE
        // console.log(newVelocity);//DELETE


        const sideways = new Vector3(1, 0, 0);
        sideways.applyQuaternion(controlObjectMesh.quaternion);
        sideways.normalize();

        sideways.multiplyScalar(newVelocity.x * delta);
        mforward.multiplyScalar(newVelocity.z * delta);
        // console.log(mforward);//DELETE
        // console.log(sideways);//DELETE

        newPosition.add(oldPosition)
        newPosition.add(mforward)
        newPosition.add(sideways)
        // console.log(newPosition);

        // console.log(newPosition);

        // controlObjectBody.setTranslation(mforward, true);//adding the current position check
        // controlObjectBody.applyImpulse(sideways, true);//adding the current position check
        // controlObjectBody.setLinvel(mforward, true)
        // controlObjectBody.setLinvel(sideways, true);//adding the current position check

        characterRigidbodyRef.current.setTranslation(newPosition, true)
        updateCameraTarget(delta, camera);
    };

    useEffect(() => {
        console.log('ran1');

        return () => {

        }
    }, [])

    useFrame((state, delta) => {
        prevAction = currAction;
        // console.log(state);
        // let [x, y, z] = [0, 0, 0]
        const jump = getKeys().jump
        const forward = getKeys().forward
        const back = getKeys().back
        const left = getKeys().left
        const right = getKeys().right
        const run = false

        prevAction = currAction;

        // if (forward) {
        //     if (run) {
        //         currAction = animations["run"].clip;
        //     } else {
        //         currAction = animations["walk"].clip;
        //     }
        // } else if (left) {
        //     if (run) {
        //         currAction = animations["run"].clip;
        //     } else {
        //         currAction = animations["walk"].clip;
        //     }
        // } else if (right) {
        //     if (run) {
        //         currAction = animations["run"].clip;
        //     } else {
        //         currAction = animations["walk"].clip;
        //     }
        // } else if (back) {
        //     if (run) {
        //         currAction = animations["run"].clip;
        //     } else {
        //         currAction = animations["walk"].clip;
        //     }
        // }
        // // else if (dance) {
        // //   currAction = animations["dance"].clip;
        // // } else {
        // //   currAction = animations["idle"].clip;
        // // }

        // if (prevAction !== currAction) {
        //     prevAction.fadeOut(0.2);

        //     if (prevAction === animations["walk"].clip) {
        //         const ratio =
        //             currAction.getClip().duration / prevAction.getClip().duration;
        //         currAction.time = prevAction.time * ratio;
        //     }

        //     currAction.reset().play();
        // } else {
        //     currAction.play();
        // }

        characterState({ delta, forward, back, left, right, camera: state.camera });
        const idealLookat = calculateIdealLookat();

        state.camera.lookAt(idealLookat);
        state.camera.updateProjectionMatrix();
        // mixer?.update(delta);

    })


    return (
        <>
            <RigidBody ref={characterRigidbodyRef} position={[0, 5, 0]} lockRotations colliders={false}>
                <Player ref={playerMeshRef} position={[0, -1, 0]} scale={1} />
                <CapsuleCollider args={[0.5, 0.5]} />
            </RigidBody></>
    )
}
export default PlayerController