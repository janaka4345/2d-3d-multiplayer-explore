import { useAnimations, useGLTF } from '@react-three/drei'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { useEffect } from 'react'

const MaleTest02 = () => {
    const character = useGLTF('./girl1.glb')
    const danceAnim = useGLTF('./M_Dances_003.glb')
    const animations = useAnimations(danceAnim.animations, character.scene)
    useEffect(() => {
        console.log(character);
        console.log(danceAnim);
        setTimeout(() => {
            animations.actions["M_Dances_003"].play()
        }, 3000);

        return () => {

        }
    }, [])

    return (
        <RigidBody position={[0, 5, 0]} lockRotations colliders={false}>
            <primitive object={character.scene} position={[0, -1, 0]} />
            <CapsuleCollider args={[0.5, 0.5]} />
        </RigidBody>

    )
}

export default MaleTest02