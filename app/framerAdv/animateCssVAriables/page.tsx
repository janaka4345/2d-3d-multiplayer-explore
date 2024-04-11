import MotionDiv from '../_components/MotionDiv'
import ServerComp from '../_components/ServerComp'

export default function page() {
    return (
        <div className=" w-full h-svh bg-green-500 flex items-center md:items-end justify-center">
            <MotionDiv>
                <ServerComp />
            </MotionDiv>
        </div>
    )
}
