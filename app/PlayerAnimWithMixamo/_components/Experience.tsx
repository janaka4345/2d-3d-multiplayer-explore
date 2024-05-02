
import { RigidBody } from "@react-three/rapier"
import Cube from "./Cube"
import Plane from "./Plane"
import CharacterController from "./CharacterController"
import { CharacterComp } from "./CharacterComp"
import { CameraControls } from "@react-three/drei"
import MixamoCharacter2 from "./MixamoCharacter2"

const Experience = () => {
  return (
    <>
      <CameraControls />
      <RigidBody type="fixed"><Plane /></RigidBody>
      <RigidBody position={[5, 5, 0]}><Cube /></RigidBody>
      {/* <CharacterController /> */}
      {/* <CharacterComp /> */}
      <MixamoCharacter2 />
    </>

  )
}
export default Experience