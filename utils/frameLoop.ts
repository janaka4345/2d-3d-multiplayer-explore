import { useEffect, useRef } from 'react'

export const useFrameLoop = (
    callback: (previousTime: number, deltaTime: number) => void
) => {
    console.log(callback)

    const requestId = useRef<number | null>(null)
    const previousTime = useRef<number | null>(null)

    const loop = (time: number) => {
        if (previousTime.current !== null) {
            const deltaTime = time - previousTime.current
            callback(previousTime.current, deltaTime)
        }
        previousTime.current = time
        requestId.current = requestAnimationFrame(loop)
    }

    useEffect(() => {
        requestId.current = requestAnimationFrame(loop)
        return () => {
            requestId.current && cancelAnimationFrame(requestId.current)
        }
    }, [])
}
