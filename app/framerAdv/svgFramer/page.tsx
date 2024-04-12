// 'use client'
// import { Button } from '@/components/ui/button'
// import DogWalk from '../_components/DogSvg'
// import DogWalk2 from '../_components/DogSvg'
// import DogWalk3 from '../_components/DogSvg3'
// import { useAnimationFrame } from 'framer-motion'
// import DogWalkMemo from '../_components/DogSvgOPtimized'
// import { Suspense, lazy, useEffect, useRef, useState } from 'react'

import DogWalkSprite from '../_components/DogWalkSprite'

export default function page() {
    // const DogWalkMemo = lazy(() => import('../_components/DogSvgOPtimized'))

    return (
        <div className="">
            {/* <Button onClick={onLoad}>click me</Button> */}
            {/* <DogWalk2 fill="bg-transparent" /> */}
            {/* <DogWalk /> */}
            {/* <DogWalk3 width={225} height={264} /> */}
            {/* <h1>hg</h1> */}
            <DogWalkSprite />
        </div>
    )
}
