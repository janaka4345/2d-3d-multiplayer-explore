import { RigidBody } from "@react-three/rapier"
import Plane from "./Plane"
import PlayerController from "./PlayerController"

const Experience = () => {
    return (
        <>
            <RigidBody type="fixed">
                <Plane />
            </RigidBody>
            <PlayerController />
        </>
    )
}
export default Experience