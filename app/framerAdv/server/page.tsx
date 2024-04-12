import { MotionElement } from '@/components/MotionElement'

export default function page() {
    const variant = {
        hidden: {
            x: -100,
        },
        visible: {
            x: 0,
        },
    }
    return (
        <div>
            <MotionElement
                variants={variant}
                initial="hidden"
                animate="visible"
            >
                <h1>hi</h1>
            </MotionElement>
        </div>
    )
}
