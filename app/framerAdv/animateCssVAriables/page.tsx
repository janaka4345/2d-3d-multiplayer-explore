'use client'
import { motion } from 'framer-motion'
import { CSSProperties } from 'react'

const variant = {
    hidden: {
        opacity: 0,
        scale: 'var(--scale-from)',
    },
    visible: {
        opacity: 1,
        scale: 'var(--scale-to)',

        transition: {
            duration: 5,
        },
    },
}
export default function page() {
    return (
        <div className=" w-full h-svh bg-green-500 flex items-center md:items-end justify-center ">
            <motion.div
                // style={
                //     {
                //         '--scale-from': '20%',
                //         '--scale-to': '100%',
                //     } as CSSProperties
                // }
                variants={variant}
                initial="hidden"
                animate="visible"
                className="bg-red-500  w-52 h-52 [--scale-from:50%] [--scale-to:60%]  md:[--scale-from:0%] md:[--scale-to:100%] "
            ></motion.div>
        </div>
    )
}
