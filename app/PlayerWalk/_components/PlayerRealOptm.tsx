import Character from "@/app/3dWorld/_components/Character";
import { CameraControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Group, Object3DEventMap, Quaternion, Raycaster, Vector3 } from "three";
import { clamp, lerp } from "three/src/math/MathUtils.js";

export default function Player({
    walk = 50,
    jump = 4,
    input = () => ({ move: [0, 0, 0], look: [0, 0] }),
}) {
    console.log("player renderd");




    const characterRigidbodyRef = useRef<RapierRigidBody>();
    const characterMeshRef = useRef<Group<Object3DEventMap>>();
    const cameraRef = useRef<CameraControls>();
    const { scene, camera } = useThree();

    const [_, getKeys] = useKeyboardControls()


    let phi = 0;
    let theta = 0;

    // declare reusable, non persistant variables, just dont need these being recreated every frame
    const speed = new Vector3(walk / 2, jump, walk);
    const offset = new Vector3(0, 0, 0);
    const gaze = new Quaternion();
    const yaw = new Quaternion();
    const pitch = new Quaternion();
    const cameraOffset = new Vector3(0, 3, 5);
    const down = new Vector3(0, -1, 0);
    const yAxis = new Vector3(0, 1, 0);
    const xAxis = new Vector3(1, 0, 0);
    const raycaster = new Raycaster(new Vector3(0, 0, 0), down, 0, 2);
    const slope = new Vector3(0, 1, 0);
    const drag = new Vector3(0.95, 1, 0.95);

    const updateOrientation = ([x, y]) => {
        const cameraSpeed = 3;
        const step = 0.3;
        phi = lerp(phi, -x * cameraSpeed, step);
        theta = lerp(theta, -y * cameraSpeed, step);
        theta = clamp(theta, -Math.PI / 3, Math.PI / 3);




        yaw.setFromAxisAngle(yAxis, phi);
        pitch.setFromAxisAngle(xAxis, theta);
        gaze.multiplyQuaternions(yaw, pitch).normalize();
    };

    // const getSlope = (ground) => {
    //   slope.set(0, 1, 0);
    //   if (ground && ground.face) {
    //     slope.copy(ground.face.normal.normalize());
    //     slope.applyQuaternion(ground.object.quaternion);
    //   }
    //   return quaternionFromNormal(slope);
    // };





    useFrame((state) => {
        let [x, y, z] = [0, 0, 0];
        // console.log(cameraRef.current.camera.position);

        // console.log({ xx: state.size.width * state.pointer.x, yy: state.size.height * state.pointer.y });
        // console.log(state.controls.OrbitControls);



        const jump = getKeys().jump
        const forward = getKeys().forward
        const back = getKeys().back
        const left = getKeys().left
        const right = getKeys().right

        if (left) {
            x -= 0.5
        }
        if (right) {
            x += 0.5
        }
        if (forward) {
            z -= 0.5
        }
        if (back) {
            z += 0.5
        }
        if (jump) {
            y += 0.5
        }

        if (!characterRigidbodyRef.current || !characterMeshRef.current) return;
        // console.log({ x, y, z });

        const velocity = vec3(characterRigidbodyRef.current.linvel());
        const position = vec3(characterRigidbodyRef.current.translation());
        const { look, running } = input();
        // console.log(look);

        // const moveVec = { x: move[0], y: move[1], z: move[2] };
        // console.log(characterRigidbodyRef.current);
        updateOrientation(look);
        // console.log(yaw);
        // // not ideal to filter here on every frame
        // const walkable = scene.children.filter(
        //   (o) => o.children[0]?.uuid !== characterMeshRef?.current?.uuid,
        // );
        // raycaster.set(position, down);
        // const ground = raycaster.intersectObjects(walkable)[0];
        // // only allow movement input on ground
        // if (ground) {
        // console.log(speed, [x, y, z]);

        offset
            .fromArray([x, y, z])
            .normalize()
            .multiply(false ? speed.clone().multiplyScalar(2.5) : speed)
            .applyQuaternion(yaw);
        // .applyQuaternion(getSlope(ground));
        const v = velocity.multiply(drag).add(offset);

        // const v = velocity.add(offset);
        characterRigidbodyRef.current.setLinvel(v, true);
        characterMeshRef.current.setRotationFromQuaternion(yaw);
        // }

        //************************************************************* */
        camera.position.lerp(
            position.add(cameraOffset.clone().applyQuaternion(yaw)),
            0.25,
        );
        camera.quaternion.copy(gaze);

        //************************************************************************** */
        // cameraRef.current.camera.position.lerp(
        //     position.add(cameraOffset.clone().applyQuaternion(yaw)),
        //     0.25,
        // );
        // cameraRef.current.camera.quaternion.copy(gaze);

        // console.log(position.add(cameraOffset.clone().applyQuaternion(yaw)));
        // console.log(gaze);


        // console.log(offset.fromArray(move));
        // console.log(new Vector3(5, 10, 2).normalize());
        // console.log(characterMeshRef.current);
    });

    return (
        <>
            {/* <CameraControls ref={cameraRef} /> */}
            <RigidBody
                ref={characterRigidbodyRef}
                colliders={false}
                lockRotations
                position={[0, 2, 0]}
                friction={0}
                restitution={0}
                scale={0.5}
            >
                {/* <characterMeshRef ref={characterMeshRef} userData={{ tag: "player" }}>
        <characterMeshRefStandardMaterial transparent opacity={1} />
        <boxGeometry args={[1, 1, 1]} />
      </characterMeshRef> */}
                <group ref={characterMeshRef}>
                    {/* <Soldier position={[0, -1, 0]} /> */}
                    <Character rotation={[0, -Math.PI, 0]} position={[0, -1, 0]} scale={2} />
                    <CapsuleCollider args={[1, 1]} />
                </group>
            </RigidBody></>
    );
}
