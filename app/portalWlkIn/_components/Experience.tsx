
import Plane from "./Plane"
import Cube from "./Cube"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import Player from "./Player"

const Experience = () => {
  return (
    <>
      <RigidBody type="fixed"><Plane /></RigidBody>
      <RigidBody position={[5, 5, 0]}><Cube /></RigidBody>
      <RigidBody type="dynamic" colliders={false} position={[0, 5, 0]}>
        <Player position={[0, -1, 0]} />
        <CapsuleCollider args={[0.5, 0.5]} />
      </RigidBody>
    </>

  )
}
export default Experience