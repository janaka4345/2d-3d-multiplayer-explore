import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const Player = () => {
    const character = useGLTF('./CharacterAnimated.glb')
    const character2 = useGLTF('./Fox.glb')
    const character3 = useFBX('./Defeated.fbx')
    const animations = useAnimations(character.animations, character.scene)

    useEffect(() => {
        character.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });

        const anima = animations.actions?.['Run']
        anima?.play()
        setTimeout(() => {
            const anima = animations.actions?.['Walk']
            anima?.play()
            anima?.crossFadeFrom(animations.actions?.['Run']!, 1, true)
        }, 5000);

        return () => {

        }
    }, [])

    return (
        <>
            <primitive castShadow object={character.scene} position={[0, -0.99, 0]} />
            {/* <primitive castShadow object={character2.scene} position={[2, -0.99, 0]} scale={0.025} />
            <primitive castShadow object={character3} position={[2, -0.99, 0]} scale={0.025} /> */}

        </>
    )
}
export default Player