'use client'
import { useAnimate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const page = () => {
    const [svgRef, animate] = useAnimate()
    // const svgRef = useRef()
    useEffect(() => {
        console.log(svgRef.current.children.circle1)
        const t = async () => {
            await animate(
                svgRef.current.children.circle1,
                { cx: 100 },
                { duration: 5 }
            )
            await animate(
                svgRef.current.children.circle2,
                { cy: 500 },
                { duration: 5 }
            )
            await animate(
                svgRef.current.children.circle1,
                { cx: 200 },
                { duration: 5 }
            )
            await animate(
                svgRef.current.children.circle2,
                { cx: 200, cy: 31.5 },
                { duration: 5 }
            )
        }

        t()
    })

    return (
        <div>
            <svg
                ref={svgRef}
                width={1024}
                height={720}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                filter="blur"
            >
                <circle
                    id="circle1"
                    cx="31.5"
                    cy="31.5"
                    r="31.5"
                    fill="#234FEC"
                />
                <circle
                    id="circle2"
                    cx="31.5"
                    cy="95.5"
                    r="31.5"
                    fill="#234FEC"
                />
            </svg>
        </div>
    )
}
export default page
