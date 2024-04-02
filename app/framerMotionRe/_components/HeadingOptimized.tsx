'use client'

// import { motion } from 'framer-motion'

import { m as motion } from 'framer-motion'
import { LazyMotion, domAnimation } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 3 },
    },
}
export default function Heading() {
    return (
        <>
            <LazyMotion features={domAnimation}>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="bg-green-500 w-full h-10"
                >
                    sup
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="bg-red-500 w-full h-10"
                >
                    sup
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-500 w-full h-10"
                >
                    sup
                </motion.div>
            </LazyMotion>
        </>
    )
}
