import { MotionElement } from '@/components/MotionElement'

export default function page() {
    return (
        <div className="flex justify-center items-center mx-auto  w-[300px] h-[300px] bg-red-400">
            <MotionElement>
                <h1 className=" w-fit mx-auto ">hi</h1>
            </MotionElement>
        </div>
    )
}
