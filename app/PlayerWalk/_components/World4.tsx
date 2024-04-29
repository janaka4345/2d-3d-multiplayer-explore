import { OrbitControls } from "@react-three/drei";
// import Lights from "./Lights";
import { Physics, RigidBody } from "@react-three/rapier";
import Plane from "@/app/3dWorld/_components/Plane";
import Player from "./PlayerReal";
import { useKeyboard } from "./useKeyboard";
import { useMouseCapture } from "./useMouseCapture";
import { Perf } from "r3f-perf";
// import Terrain from "./Terrain";
function getInput(keyboard, mouse) {
    // console.log("y");
    let [x, y, z] = [0, 0, 0];
    if (keyboard["s"]) z += 0.2;
    if (keyboard["w"]) z -= 0.2;
    if (keyboard["d"]) x += 0.2;
    if (keyboard["a"]) x -= 0.2;
    if (keyboard[" "]) y += 0.2;

    return {
        move: [x, y, z],
        look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight],
        running: keyboard["Shift"],
    };
}
export default function World() {
    const keyboard = useKeyboard();
    const mouse = useMouseCapture();

    return (
        <>
            <OrbitControls makeDefault />
            <Perf position="top-right" />
            {/* <OrbitControls /> */}
            <directionalLight intensity={2} castShadow position={[5, 5, 5]} />
            <ambientLight />
            {/* <axesHelper args={[2]} /> */}
            {/* <color attach="background" args={["#000000"]} /> */}
            {/* <Lights /> */}
            <Physics debug>
                <RigidBody type="fixed" >
                    <Plane /></RigidBody>
                {/* <Terrain /> */}
                <Player walk={0.2} jump={0.2} input={() => getInput(keyboard, mouse)} />
            </Physics>
        </>
    );
}
