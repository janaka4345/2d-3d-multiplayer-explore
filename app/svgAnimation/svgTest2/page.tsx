'use client'
import { Icon } from '@/components/icon'
import { useEffect, useRef } from 'react'

export default function page() {
    const friendRef = useRef(null)
    useEffect(() => {
        console.log({ friendRef })
    }, [])

    return (
        <div>
            <Icon ref={friendRef} className="h-52 w-52" name="Frame 1" />
        </div>
    )
}
