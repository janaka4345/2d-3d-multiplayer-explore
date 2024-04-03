import { useEffect, useRef } from 'react'

export const useFrameLoop = (
    callback: (timestamp: number, deltaTime: number) => void
) => {
    // console.log(callback)

    const requestId = useRef<number | null>(null)
    const timestamp = useRef<number | null>(null)

    const loop = (time: number) => {
        if (timestamp.current !== null) {
            const deltaTime = time - timestamp.current
            callback(timestamp.current, deltaTime)
        }
        timestamp.current = time
        requestId.current = requestAnimationFrame(loop)
    }

    useEffect(() => {
        requestId.current = requestAnimationFrame(loop)

        return () => {
            requestId.current && cancelAnimationFrame(requestId.current)
        }
    }, [])
}
