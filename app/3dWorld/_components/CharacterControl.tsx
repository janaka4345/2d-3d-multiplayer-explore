import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const CharacterControl = () => {
  const character = useGLTF('./CharacterAnimated.glb')
  useEffect(() => {
    console.log(character);


    return () => {

    }
  }, [])

  return (
    <primitive object={character.scene} />
  )
}
export default CharacterControl