import { useGLTF } from "@react-three/drei"
import { type MeshProps } from "@react-three/fiber"
import { useEffect } from "react"

const Character = (props: MeshProps) => {
  const character = useGLTF('./CharacterAnimated.glb')

  useEffect(() => {
    console.log(character);
    character.scene.traverse((child) => {
      if (child.isObject3D) {
        child.castShadow = true;
      }
    });
    return () => {

    }
  }, [])

  return (

    <primitive object={character.scene} {...props} />

  )
}
export default Character