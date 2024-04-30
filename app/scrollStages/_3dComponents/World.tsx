import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { CameraControls, Environment } from "@react-three/drei"
import { Perf } from "r3f-perf"
import { Physics } from "@react-three/rapier"

const World = () => {
    return (
        <div className="mx-auto w-fit flex flex-col">
            <Canvas shadows
                style={{ width: '80svw', height: '100svh' }}>
                <Physics>

                    <directionalLight intensity={2} castShadow position={[5, 5, 5]} />
                    <ambientLight />
                    <Perf />
                    {/* <Environment preset="city" backgroundIntensity={5} /> */}
                    <CameraControls
                        // minZoom={1}
                        // maxZoom={3}
                        polarRotateSpeed={0.3}
                        azimuthRotateSpeed={0.3}
                        mouseButtons={{
                            left: 1,
                            right: 1,
                            wheel: 16,
                            middle: 1
                        }}
                        touches={{
                            one: 32,
                            two: 512,
                            three: 1024
                        }}
                    />
                    <Experience /></Physics>
            </Canvas>

        </div>
    )
}
export default World