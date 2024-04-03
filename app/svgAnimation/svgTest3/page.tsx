'use client'
import { Icon } from '@/components/icon'
import { useEffect, useRef } from 'react'

export default function page() {
    const svgRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        svgRef.current && console.log(svgRef.current.width)
        // svgRef.current &&  svgRef.current.width=2400
        return () => {}
    }, [])

    return (
        <div>
            {/* <Icon
                ref={svgRef}
                name="layered-waves-haikei"
                className="w-fit h-fit"
            /> */}
            {/* <svg className=" w-fit h-fit">
                <use
                    width="1000px"
                    height="600px"
                    href={`http://localhost:3000/icons/sprite.svg#layered-waves-haikei3`}
                ></use>
            </svg> */}
        </div>
    )
}
