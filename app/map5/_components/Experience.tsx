import { useGLTF } from '@react-three/drei'
import React, { Suspense } from 'react'


const Experience = () => {
    const map = useGLTF('./New-folder/cityblendfg.gltf')
    return (
        <primitive object={map.scene} />

    )
}

export default Experience