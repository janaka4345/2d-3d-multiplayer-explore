import { RapierRigidBody, RigidBody } from "@react-three/rapier"
import Cube from "./Cube"
import Stage1 from "./Stage1"
import Stage2 from "./Stage2"
import { useEffect, useRef, useState } from "react"


const Experience = () => {
    const stage1Ref = useRef<RapierRigidBody>()
    const cubeRef = useRef<RapierRigidBody>()

    const [state, setstate] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            console.log(stage1Ref.current);
            setstate(false)
            // cubeRef.current.setTranslation({ x: 0, y: -5, z: 0 }, true)

        }, 5000)

        setTimeout(() => {
            console.log(stage1Ref.current);
            cubeRef.current.applyImpulse({ x: 0, y: 200, z: 0 }, true)
            // setstate(true)

        }, 10000)
        return () => {

        }
    }, [])


    return (
        <>
            <RigidBody ref={cubeRef}>

                <Cube />
            </RigidBody>
            {state && <RigidBody ref={stage1Ref} type="fixed">

                <Stage1 />
            </RigidBody>}
            <RigidBody type="fixed">
                <Stage2 />

            </RigidBody>
        </>
    )
}
export default Experience