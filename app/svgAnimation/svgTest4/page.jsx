'use client'

import { IconJsx } from '@/components/iconJsx'
import { useAnimate } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function page() {
    const svgSprite = useRef()
    const [_, animate] = useAnimate()
    useEffect(() => {
        console.log(svgSprite)
        animate(
            svgSprite.current,
            { scale: 120 },
            { ease: 'easeInOut', duration: 10 }
        )
        return () => {}
    }, [])

    return (
        <div>
            <svg>
                <IconJsx ref={svgSprite} className="h-52 w-52" name="Frame 1" />
            </svg>
        </div>
    )
}
