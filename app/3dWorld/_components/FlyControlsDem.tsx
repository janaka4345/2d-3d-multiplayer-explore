import { RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import Plane from "./Plane"
import Cube from "./Cube"
import { Vector3, type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three"
import { useFrame } from "@react-three/fiber"

const FlyControlsDem = () => {
  const cubeRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>()
  useEffect(() => {
    console.log(cubeRef);


    return () => {

    }
  }, [])
  useFrame((state) => {
    console.log(state.pointer.x);
    // state.camera.lookAt(new Vector3(state.pointer.x * 10, state.pointer.y * 10, 1))

  })

  return (
    <>
      <RigidBody type='fixed'>
        <Plane />
      </RigidBody>
      <RigidBody >
        <Cube ref={cubeRef} position={[0, 0, 0]} scale={0.5} />
      </RigidBody>

    </>

  )
}
export default FlyControlsDem