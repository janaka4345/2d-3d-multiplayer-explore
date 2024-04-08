'use client'
import { MySvg } from '@/components/Svg'
import { useEffect, useRef } from 'react'
// import { Component } from 'react'
// import ReactComponent from '@/public/layered-waves-haikei.svg'

export default function page() {
    const useSvg = useRef(null)
    useEffect(() => {
        console.log(MySvg)

        return () => {}
    }, [])

    return (
        <div>
            <MySvg />
            {/* <svg className="">
                <use
                    ref={useSvg}
                    xlinkHref="http://localhost:3000/svgSprite.svg#dog-walk"
                ></use>
            </svg> */}
        </div>
    )
}
