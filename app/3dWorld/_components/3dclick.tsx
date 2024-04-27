import { useEffect, useRef } from "react"
import { type Mesh } from "three"
import Cube from "./Cube"
import Sphere from "./Sphere"

const Click3d = () => {
    const sphereRef = useRef<Mesh>()
    useEffect(() => {
        console.log(sphereRef);


        return () => {

        }
    }, [])

    return (
        <>
            <Sphere ref={sphereRef} onClick={() => console.log('sphere clicked')} position={[0, 4, 0]} />
            <Cube onClick={() => console.log('cube clicked')} position={[5, 1, 0]} />
        </>

    )
}
export default Click3d