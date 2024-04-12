'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const svgAsImage = () => {
    const imageRef = useRef()
    useEffect(() => {
        console.log(imageRef)

        return () => {}
    }, [])

    return (
        <div className="bg-red-400 w-auto h-auto">
            <Image
                ref={imageRef}
                src="/dogWalk/dogWalk/dog-walk-optimized.svg"
                alt="dog-walk"
                width={225}
                height={1200}
                className=" "
            />
        </div>
    )
}
export default svgAsImage
