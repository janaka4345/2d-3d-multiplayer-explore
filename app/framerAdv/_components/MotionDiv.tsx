'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionDiv({ children }: { children: ReactNode }) {
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
    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            className="bg-red-500  w-52 h-52 [--scale-from:50%] [--scale-to:60%]  md:[--scale-from:0%] md:[--scale-to:100%] "
        >
            {children}
        </motion.div>
    )
}
