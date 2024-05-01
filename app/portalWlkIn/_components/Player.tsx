import { useGLTF } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useEffect } from "react"


const Player = (props: MeshProps) => {
    const player = useGLTF('./Character_Soldier.gltf')
    useEffect(() => {
        console.log(player);

        return () => {

        }
    }, [])

    return (
        <primitive object={player.scene} {...props} />
    )
}
export default Player