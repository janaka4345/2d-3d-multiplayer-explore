import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useRef } from "react"
import Cube from "./Cube"
import Plane from "./Plane"
import Sphere from "./Sphere"

const ExperiencePhysics = () => {
  const cubeRef = useRef<RapierRigidBody>()
  const cubeHandleClick = () => {
    console.log('cubeClicked');
    console.log(cubeRef);
    cubeRef.current.addForce({ x: 0, y: 3, z: 0 }, true)



  }
  return (
    <>
      <Physics debug>
        <RigidBody type="fixed" >
          <Plane />
        </RigidBody>

        <RigidBody ref={cubeRef} >
          <Cube onClick={cubeHandleClick} castShadow position={[0, 5, 0]} scale={0.5} />
        </RigidBody>

        <RigidBody colliders="ball">
          <Sphere castShadow position={[0, 10, 0]} />
        </RigidBody>
      </Physics></>
  )
}
export default ExperiencePhysics