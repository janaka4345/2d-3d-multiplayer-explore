import { useAnimations, useGLTF } from '@react-three/drei'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, { useEffect } from 'react'

const MaleTest = () => {
    const character = useGLTF('./characterAvatar.glb')
    const animations = useAnimations(character.animations, character.scene)
    useEffect(() => {
        console.log(character);
        setTimeout(() => {
            animations.actions["wawe"].play()
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

export default MaleTest