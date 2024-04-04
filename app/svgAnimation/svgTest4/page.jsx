'use client'

import { IconJsx } from '@/components/iconJsx'
import { useEffect } from 'react'

export default function page() {
    useEffect(() => {
        fetch('http://localhost:3000/icons/sprite.svg')
            .then((res) => res.body)
            .then((data) => console.log(data))

        // console.log(svgSprite)
        return () => {}
    }, [])

    return (
        <div>
            <IconJsx className="h-52 w-52" name="Frame 1" />
        </div>
    )
}
