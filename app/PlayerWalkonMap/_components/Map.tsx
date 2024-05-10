import { useGLTF } from "@react-three/drei"

const Map = () => {
    const map = useGLTF('./skillCityFinal.glb')
    const map2 = useGLTF('./skillCityFinal2.glb')
    return (

        <primitive object={map2.scene} />
    )
}
export default Map