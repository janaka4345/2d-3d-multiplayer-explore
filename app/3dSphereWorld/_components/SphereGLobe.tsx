import { Environment, useTexture } from "@react-three/drei"
import { BackSide } from "three"

const SphereGLobe = () => {
    const texture = useTexture('/room2.avif')
    return (
        <>
            {/* <Environment files={'/roomVR.jpg'} /> */}
            <mesh>
                <sphereGeometry args={[5, 32, 32]} />
                <meshPhysicalMaterial map={texture} side={BackSide} />
            </mesh>
        </>

    )
}
export default SphereGLobe