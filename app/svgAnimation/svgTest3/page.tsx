'use client'
import { useFrameLoop } from '@/utils/frameLoop'
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function page() {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [scope, animate] = useAnimate()
    // const [x, setX] = useState<number>(0)

    // useFrameLoop((time, deltaTime) => {
    // setX(time)
    // console.log({ time, deltaTime })
    // svgRef.current &&
    //     svgRef.current.setAttribute('viewBox', `${time * 0.1},0,600,600`)
    // setX(deltaTime)
    // })

    useEffect(() => {
        svgRef.current && console.log(svgRef.current.children)
        svgRef.current &&
            animate(
                svgRef.current.children[0],
                { fill: 'rgba(0, 0, 200, 0.10)' },
                { ease: 'easeInOut', duration: 10 }
            )
        // svgRef.current && console.log(svgRef.current.clientHeight)
        // svgRef.current &&
        //     // svgRef.current.setAttribute('viewBox', `200,0,600,600`)
        //     svgRef.current &&
        //     svgRef.current.setAttribute('width', '600')
        // svgRef.current && svgRef.current.setAttribute('height', '600')

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
            <svg
                ref={svgRef}
                id="visual"
                viewBox="0 0 600 600"
                width="600"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <rect
                    x="0"
                    y="0"
                    width="2400"
                    height="600"
                    fill="rgba(0, 0, 200, 1)"
                ></rect>
                <path
                    // initial={{ x: '0px' }}
                    // animate={{ x: '-2400px', transition: { duration: 100 } }}
                    d="M0 445L57.2 432.8C114.3 420.7 228.7 396.3 343 388.8C457.3 381.3 571.7 390.7 686 398.2C800.3 405.7 914.7 411.3 1028.8 406.3C1143 401.3 1257 385.7 1371.2 387.8C1485.3 390 1599.7 410 1714 413.5C1828.3 417 1942.7 404 2057 393.8C2171.3 383.7 2285.7 376.3 2342.8 372.7L2400 369L2400 601L2342.8 601C2285.7 601 2171.3 601 2057 601C1942.7 601 1828.3 601 1714 601C1599.7 601 1485.3 601 1371.2 601C1257 601 1143 601 1028.8 601C914.7 601 800.3 601 686 601C571.7 601 457.3 601 343 601C228.7 601 114.3 601 57.2 601L0 601Z"
                    fill="#95fa69"
                ></path>
                <path
                    d="M0 454L57.2 452.7C114.3 451.3 228.7 448.7 343 440.3C457.3 432 571.7 418 686 415.8C800.3 413.7 914.7 423.3 1028.8 431.3C1143 439.3 1257 445.7 1371.2 441.5C1485.3 437.3 1599.7 422.7 1714 423.7C1828.3 424.7 1942.7 441.3 2057 443.8C2171.3 446.3 2285.7 434.7 2342.8 428.8L2400 423L2400 601L2342.8 601C2285.7 601 2171.3 601 2057 601C1942.7 601 1828.3 601 1714 601C1599.7 601 1485.3 601 1371.2 601C1257 601 1143 601 1028.8 601C914.7 601 800.3 601 686 601C571.7 601 457.3 601 343 601C228.7 601 114.3 601 57.2 601L0 601Z"
                    fill="#becb26"
                ></path>
                <path
                    d="M0 472L57.2 476.8C114.3 481.7 228.7 491.3 343 491.8C457.3 492.3 571.7 483.7 686 480C800.3 476.3 914.7 477.7 1028.8 475.3C1143 473 1257 467 1371.2 470.3C1485.3 473.7 1599.7 486.3 1714 483C1828.3 479.7 1942.7 460.3 2057 455.2C2171.3 450 2285.7 459 2342.8 463.5L2400 468L2400 601L2342.8 601C2285.7 601 2171.3 601 2057 601C1942.7 601 1828.3 601 1714 601C1599.7 601 1485.3 601 1371.2 601C1257 601 1143 601 1028.8 601C914.7 601 800.3 601 686 601C571.7 601 457.3 601 343 601C228.7 601 114.3 601 57.2 601L0 601Z"
                    fill="#cf9a00"
                ></path>
                <path
                    d="M0 522L57.2 524.5C114.3 527 228.7 532 343 528.3C457.3 524.7 571.7 512.3 686 503.5C800.3 494.7 914.7 489.3 1028.8 490.7C1143 492 1257 500 1371.2 501.3C1485.3 502.7 1599.7 497.3 1714 493.5C1828.3 489.7 1942.7 487.3 2057 487.5C2171.3 487.7 2285.7 490.3 2342.8 491.7L2400 493L2400 601L2342.8 601C2285.7 601 2171.3 601 2057 601C1942.7 601 1828.3 601 1714 601C1599.7 601 1485.3 601 1371.2 601C1257 601 1143 601 1028.8 601C914.7 601 800.3 601 686 601C571.7 601 457.3 601 343 601C228.7 601 114.3 601 57.2 601L0 601Z"
                    fill="#d16606"
                ></path>
                <path
                    d="M0 538L57.2 542.3C114.3 546.7 228.7 555.3 343 558.7C457.3 562 571.7 560 686 557.5C800.3 555 914.7 552 1028.8 549.5C1143 547 1257 545 1371.2 544.7C1485.3 544.3 1599.7 545.7 1714 546.2C1828.3 546.7 1942.7 546.3 2057 544C2171.3 541.7 2285.7 537.3 2342.8 535.2L2400 533L2400 601L2342.8 601C2285.7 601 2171.3 601 2057 601C1942.7 601 1828.3 601 1714 601C1599.7 601 1485.3 601 1371.2 601C1257 601 1143 601 1028.8 601C914.7 601 800.3 601 686 601C571.7 601 457.3 601 343 601C228.7 601 114.3 601 57.2 601L0 601Z"
                    fill="#c72424"
                ></path>
            </svg>
        </div>
    )
}
