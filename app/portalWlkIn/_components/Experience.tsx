
import { RigidBody } from "@react-three/rapier"
import Cube from "./Cube"
import Plane from "./Plane"
import CharacterController from "./CharacterController"

const Experience = () => {
  return (
    <>

      <RigidBody type="fixed"><Plane /></RigidBody>
      <RigidBody position={[5, 5, 0]}><Cube /></RigidBody>
      <CharacterController />

    </>

  )
}
export default Experience