'use client'
import { useRef } from 'react'

const page = () => {
    const svgRef = useRef()
    console.log(svgRef)

    return (
        <div>
            <svg
                ref={svgRef}
                width="63"
                height="142"
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
            <svg height="300" width="300">
                <circle cx="80" cy="80" r="40" fill="red" />
                <circle cx="120" cy="80" r="40" fill="red" />
                <circle cx="150" cy="80" r="40" fill="red" />
                <circle cx="150" cy="120" r="40" fill="red" />
                <circle cx="100" cy="100" r="40" fill="red" />
            </svg>
        </div>
    )
}
export default page
