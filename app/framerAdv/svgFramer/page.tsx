import DogWalk from '../_components/DogSvg'
import DogWalk2 from '../_components/DogSvg'
import DogWalk3 from '../_components/DogSvg3'

export default function page() {
    return (
        <div className="bg-green-500 w-fit">
            {/* <DogWalk2 fill="bg-transparent" /> */}
            {/* <DogWalk /> */}
            <DogWalk3 width={225} height={264} />
        </div>
    )
}
