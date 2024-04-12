'use client'
import { useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'
import DogWalkMemo from './DogSvgOPtimized'
import { Button } from '@/components/ui/button'

const DogWalkSprite = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const handleClick = () => {
        console.log(svgRef)

        // svgRef.current.setAttribute('viewport', `50 50  244  157`)
    }
    useAnimationFrame((time, delta) => {
        const T = Math.floor(time * 0.003) % 9
        // console.log(135.18 * T)
        svgRef.current.setAttribute('viewBox', `0 ${135.18 * T} 212 135.18`)
        // console.log(svgRef)
    })
    return (
        <>
            {/* <Button onClick={handleClick}>click</Button> */}
            <DogWalkMemo ref={svgRef} width={212} height={135.18} />
        </>
    )
}
export default DogWalkSprite
