import { RigidBody } from "@react-three/rapier"
import Plane from "./Plane"
import PlayerController from "./PlayerController"
import FemaleDance from "./FemaleDance"
import MaleTest from "./MaleTest"

const Experience = () => {
    return (
        <>
            <RigidBody type="fixed">
                <Plane />
            </RigidBody>
            {/* <PlayerController /> */}
            {/* <FemaleDance /> */}
            <MaleTest />
        </>
    )
}
export default Experience