
import { RigidBody } from "@react-three/rapier"
import Cube from "./Cube"
import Plane from "./Plane"
import CharacterController from "./CharacterController"
import { RenderTexture } from "@react-three/drei"
import Plane2 from "./Plane2"

const Experience = () => {
  return (
    <>

      <RigidBody type="fixed"><Plane /></RigidBody>
      <RigidBody position={[5, 5, 0]}><Cube /></RigidBody>
      {/* <CharacterController /> */}
      <mesh>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial >
          <RenderTexture attach='map'>
            <Plane2 />
          </RenderTexture>

        </meshBasicMaterial>
      </mesh>

    </>

  )
}
export default Experience