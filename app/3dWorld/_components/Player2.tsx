import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

const Player = () => {
    const count = useRef(0)
    const countPrev = useRef(0)
    const character = useGLTF('./CharacterAnimated.glb')
    // const character2 = useGLTF('./Fox.glb')
    // const character3 = useFBX('./Defeated.fbx')
    const animations = useAnimations(character.animations, character.scene)

    useEffect(() => {
        console.log(animations);
        const animationNames = animations.names
        character.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
        // character3.traverse((child) => {
        //     if (child.isObject3D) {
        //         child.castShadow = true;
        //     }
        // });

        // const anima = animations.actions?.['Run']
        // anima?.play()
        // setTimeout(() => {
        //     const anima = animations.actions?.['Walk']
        //     anima?.play()
        //     anima?.crossFadeFrom(animations.actions?.['Run']!, 1, true)
        // }, 5000);
        const interval = setInterval(() => {
            const anima = animations.actions?.[animationNames[count.current]]
            anima?.reset().play()
            anima?.crossFadeFrom(animations.actions?.[animationNames[countPrev.current]]!, 1, true)
            countPrev.current = count.current
            count.current <= animationNames.length ? count.current += 1 : count.current = 0
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <primitive castShadow object={character.scene} position={[0, -0.99, 0]} />
            {/* <primitive castShadow object={character2.scene} position={[2, -0.99, 0]} scale={0.025} />*/}
            {/* <primitive castShadow object={character3} position={[2, -0.99, 0]} scale={0.025} /> */}

        </>
    )
}
export default Player