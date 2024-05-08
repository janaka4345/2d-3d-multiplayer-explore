import { Suspense } from "react"
import World from "./_components/World"

const page = () => {
    return (
        <Suspense fallback={<h1>loading .....</h1>}>
            <World />
        </Suspense>
    )
}
export default page