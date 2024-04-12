'use client'
import { useAnimationFrame } from 'framer-motion'
import { Suspense, lazy, useRef } from 'react'
// import DogWalkMemo from './DogSvgOPtimized'

const DogWalkMemo = lazy(() => import('../_components/DogSvgOPtimized'))
const DogWalkSprite = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useAnimationFrame((time, delta) => {
        const T = Math.floor(time * 0.003) % 9
        svgRef?.current?.setAttribute('viewBox', `0 ${135.18 * T} 212 135.18`)
    })
    return (
        <>
            {DogWalkMemo && (
                <Suspense fallback={<h1>loading ...</h1>}>
                    <DogWalkMemo ref={svgRef} width={212} height={135.18} />
                </Suspense>
            )}
        </>
    )
}
export default DogWalkSprite
