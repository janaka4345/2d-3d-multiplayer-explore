import { CameraControls, Environment, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei"
import { RepeatWrapping } from 'three'
const Plane2 = () => {
    const texture = useTexture('./floorGrid2.png')
    texture.wrapS = RepeatWrapping  // Set wrap mode for X-axis
    texture.wrapT = RepeatWrapping  // Set wrap mode for Y-axis
    texture.repeat.set(50, 50)  // Set the number of repeats
    return (
        <>
            <ambientLight />
            <Environment preset="dawn" background />
            <PerspectiveCamera />
            {/* <OrbitControls /> */}
            <mesh receiveShadow rotation-x={-Math.PI * 0.5} scale={100} position={[0, -1, 0]} >
                <planeGeometry />
                <meshStandardMaterial map={texture} />
            </mesh>
        </>
    )
}
export default Plane2