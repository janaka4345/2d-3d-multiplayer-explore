import { type RapierRigidBody, RigidBody, vec3 } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import Plane from "./Plane"
import Cube from "./Cube"
import { Vector3, type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap, Euler } from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { CameraControls } from "@react-three/drei"

const FlyControlsDem = () => {
  const cubeRef = useRef<RapierRigidBody>()
  const scene = useThree()
  const cameraRef = useRef<CameraControls>()

  useEffect(() => {
    // console.log(cubeRef);
    setTimeout(() => {
      // cubeRef.current.addForce(new Vector3(10, 0, 0), true)
      cubeRef.current.setLinvel(new Vector3(10, 10, 5), true)
      // console.log(scene);
      // scene.camera.setRotationFromEuler(new Euler(6, 8, 0))

    }, 5000);

    return () => {

    }
  }, [])
  useFrame((state) => {
    if (cameraRef.current && cubeRef.current) {
      const cameraDistanceY = 16
      const cameraDistanceZ = 16
      const playerPosition = (vec3(cubeRef.current.translation()))
      cameraRef.current.setLookAt(
        playerPosition.x,
        playerPosition.y + cameraDistanceY,
        playerPosition.z + cameraDistanceZ,
        playerPosition.x,
        playerPosition.y + 1.5,
        playerPosition.z,

      )
    }


    // console.log(state.pointer.x);
    // state.camera.lookAt(new Vector3(state.pointer.x * 10, state.pointer.y * 10, 1))

  })

  return (
    <>
      <CameraControls
        ref={cameraRef}
        minZoom={1}
        maxZoom={3}
        dollyToCursor
        polarRotateSpeed={0.3}
        azimuthRotateSpeed={0.3}
        mouseButtons={{ left: 1, wheel: 16 }}
        touches={{ one: 32, two: 512 }} />
      <RigidBody type='fixed'>
        <Plane />
      </RigidBody>
      <RigidBody ref={cubeRef} type="dynamic">
        <Cube position={[0, 0, 0]} scale={0.5} />
      </RigidBody>

    </>

  )
}
export default FlyControlsDem