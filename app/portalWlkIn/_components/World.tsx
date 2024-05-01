'use client'
import { CameraControls, Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import Experience from "./Experience"
const World = () => {
  return (
    <Canvas
      style={{ width: '100svh', height: '100svh' }}>
      <Perf />
      <Physics debug>
        <CameraControls />
        <ambientLight />
        <Environment preset="sunset" />
        <Experience />
      </Physics>
    </Canvas>
  )
}
export default World