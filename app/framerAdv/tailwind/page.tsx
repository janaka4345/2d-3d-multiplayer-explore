'use client'
import { motion } from 'framer-motion'

export default function page() {
    const divVariant = {
        hidden: { opacity: 0, scale: 'var(--scale-from)' },
        visible: {
            opacity: 1,
            scale: 'var(--scale-to)',
            transition: { duration: 5 },
        },
    }
    return (
        <div>
            <motion.div
                variants={divVariant}
                initial="hidden"
                animate="visible"
                className="bg-red-500 w-52 h-52 mx-auto [--scale-from:20%] [--scale-to:100%] md:[--scale-from:100%] md:[--scale-to:10%]"
            ></motion.div>
        </div>
    )
}
