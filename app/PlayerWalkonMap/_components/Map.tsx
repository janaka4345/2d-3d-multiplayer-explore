import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const Map = () => {
    const map = useGLTF('./skillCityFinal.glb')
    const map2 = useGLTF('./skillCityFinal2.glb')
    const map3 = useGLTF('./skillCity2blendAnim.glb')
    const map4 = useGLTF('./skillCity3animate.glb')
    const map5 = useGLTF('./test.glb')
    const map11 = useGLTF('./skillCityfinal11.glb')
    const map13 = useGLTF('./skillCity13compresed.glb')
    const map14 = useGLTF('./skillCity14.glb')
    // const map12 = useGLTF('./skillCityfinal11uncompresed.glb')
    console.log(map13);
    const animation = useAnimations(map14.animations, map14.scene)
    useEffect(() => {
        setTimeout(() => {
            animation.actions['Animation'].play()
        }, 2000);
        return () => {

        }
    }, [])
    return (

        <primitive object={map14.scene} />
    )
}
export default Map