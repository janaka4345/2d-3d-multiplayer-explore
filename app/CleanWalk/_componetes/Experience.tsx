import { RigidBody } from "@react-three/rapier"
import Plane from "./Plane"
import PlayerController from "./PlayerController"
import FemaleDance from "./FemaleDance"
import MaleTest from "./MaleTest"
import MaleTest02 from "./MaleTest2"

const Experience = () => {
    return (
        <>
            <RigidBody type="fixed">
                <Plane />
            </RigidBody>
            {/* <PlayerController /> */}
            {/* <FemaleDance /> */}
            {/* <MaleTest /> */}
            <MaleTest02 />

        </>
    )
}
export default Experience