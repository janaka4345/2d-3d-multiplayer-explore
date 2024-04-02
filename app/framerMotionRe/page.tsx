import { MotionElement } from '@/components/MotionElement'
import Heading from './_components/Heading'
const variants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 5 },
    },
}

export default function page() {
    return (
        <>
            <Heading />
            <div className="flex justify-center items-center mx-auto  w-[300px] h-[300px] bg-red-400">
                <MotionElement
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className=" w-fit mx-auto ">hi</h1>
                </MotionElement>
            </div>
        </>
    )
}
