import { CapsuleCollider, Physics, type RapierRigidBody, RigidBody, CuboidCollider, vec3 } from "@react-three/rapier"
import Character from "./Character"
import Plane from "./Plane"
import Cube from "./Cube"
import { useFrame } from "@react-three/fiber"
import { CameraControls, useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Euler, Group, Mesh, Object3DEventMap, Quaternion, Raycaster, Vector3 } from "three"
import { clamp, lerp } from "three/src/math/MathUtils.js"



const ExperienceCharacter4 = () => {
    const [sub, get] = useKeyboardControls()


    const characterRef = useRef<RapierRigidBody>()
    const characterMeshRef = useRef<Group<Object3DEventMap>>()
    const cubeRef = useRef<RapierRigidBody>()
    const cameraRef = useRef<CameraControls>()
    console.log(' ran');


    let phi = 0; // Horizontal angle of the camera's orientation.
    let theta = 0; // Vertical angle of the camera's orientation.
    const walk = 3;
    const jump = 0;
    // Declare reusable, non-persistent variables (avoiding recreation every frame).
    const speed = new Vector3(walk, jump, walk); // Vector representing the player's movement speed.
    const offset = new Vector3(0, 0, 0); // Vector used to calculate the player's movement based on user input.
    const gaze = new Quaternion(); // Quaternion representing the direction the player character is looking at.
    const yaw = new Quaternion(); // Quaternion controlling horizontal rotations of the player's camera.
    const pitch = new Quaternion(); // Quaternion controlling vertical rotations of the player's camera.
    const cameraOffset = new Vector3(0, 3, 5); // Vector representing the offset of the camera from the player's position.
    const down = new Vector3(0, -1, 0); // Vector pointing downwards, used for raycasting to determine ground collision.
    const yAxis = new Vector3(0, 1, 0); // Vector representing the world's y-axis.
    const xAxis = new Vector3(1, 0, 0); // Vector representing the world's x-axis.
    const raycaster = new Raycaster(new Vector3(0, 0, 0), down, 0, 2); // Raycaster for ground collision detection.
    const slope = new Vector3(0, 1, 0); // Vector representing the slope of the ground surface.
    const drag = new Vector3(0.85, 1, 0.85);

    // Function to update the player's camera orientation based on user input.
    const updateOrientation = ([x, y]: number[]) => {
        const cameraSpeed = 1; // Speed factor for camera movement.
        const step = 0.3; // Step for smooth interpolation of camera orientation changes.
        phi = lerp(phi, -x * cameraSpeed, step); // Interpolate horizontal camera rotation.
        theta = lerp(theta, -y * cameraSpeed, step); // Interpolate vertical camera rotation.
        theta = clamp(theta, -Math.PI / 3, Math.PI / 3); // Clamp vertical rotation within limits.

        yaw.setFromAxisAngle(yAxis, phi); // Set the yaw quaternion based on horizontal rotation.
        pitch.setFromAxisAngle(xAxis, theta); // Set the pitch quaternion based on vertical rotation.
        gaze.multiplyQuaternions(yaw, pitch).normalize(); // Combine yaw and pitch to get the gaze direction.
    };

    useEffect(() => {
        console.log('useeffect ran');

    }, [])
    useFrame((state) => {
        if (!characterRef.current || !cameraRef.current) return null;

        // console.log(cameraRef.current);
        // cubeRef.current.setTranslation(new Vector3(cameraRef.current.camera.position.x - 4, cameraRef.current.camera.position.y, cameraRef.current.camera.position.z), true)
        // characterRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true)
        // console.log(characterRef.current.rotation());
        // console.log(cameraRef.current.lerpLookAt);



        const jump = get().jump
        const forward = get().forward
        const back = get().back
        const left = get().left
        const right = get().right
        // console.log(state.viewport.getCurrentViewport());
        // console.log(state.size);

        // console.log({ x: state.pointer.x * state.size.width / 2, y: state.pointer.y * state.size.height / 2 });



        const currentPosition = vec3(characterRef.current.translation()) // Get the player's current position from the RigidBody API.
        const currentVelocity = vec3(characterRef.current.linvel());

        if (left) {
            currentPosition.x += 0.05
        }
        if (right) {
            currentPosition.x -= 0.05
        }
        if (forward) {
            currentPosition.z += 0.05
        }
        if (back) {
            currentPosition.z -= 0.05
        }
        characterRef.current.setTranslation(currentPosition, true)


        // const { move, look, running } = input(); // Get current player input, including movement and camera look direction.
        const look = [state.pointer.x, state.pointer.y * -1]
        updateOrientation(look); // Update the player's camera orientation based on the camera look direction.

        // Filter the scene's children to get all walkable objects (excluding the player's mesh).
        // const walkable = scene.children.filter(
        //   (o) => o.children[0]?.uuid !== mesh?.current?.uuid
        // );

        // raycaster.set(position, down);
        // Calculate the offset vector for player movement based on user input, speed, and orientation.
        let running = false
        offset
            .fromArray([currentPosition.x, currentPosition.y, currentPosition.z])
            .normalize()
            .multiply(running ? speed.clone().multiplyScalar(2.5) : speed)
            .applyQuaternion(yaw);

        characterRef.current.applyImpulse(offset, true);

        // const newPosition = new Vector3(currentPosition.x, currentPosition.y, currentPosition.z);
        // cameraRef.current.setLookAt(currentPosition.x + cameraOffset.x, currentPosition.y + cameraOffset.y, currentPosition.z + cameraOffset.z, currentPosition.x + 5, currentPosition.y, currentPosition.z, true)
        const v = currentVelocity.multiply(drag).add(offset);
        // const v = velocity.add(offset);
        characterRef.current.setLinvel(v, true);
        characterMeshRef.current.setRotationFromQuaternion(yaw);
        // }
        state.camera.position.lerp(
            currentPosition.add(cameraOffset.clone().applyQuaternion(yaw)),
            0.25
        );

        state.camera.quaternion.copy(gaze);

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
            <RigidBody lockRotations type="kinematicVelocity" ref={characterRef} friction={0.5} restitution={0.5} position={[0, 1, 0]} colliders={false}>
                <group ref={characterMeshRef}>
                    <Character castShadow position={[0, -1.5, 0]} />
                    <CapsuleCollider args={[1.05, 0.5]} /></group>
                {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
            </RigidBody>



        </>
    )
}
export default ExperienceCharacter4