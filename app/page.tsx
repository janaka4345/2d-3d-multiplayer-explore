
import Canvas from '@/2dComponents/Canvas'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href='multiplayerRoom'>chat room</Link>
            <Link href='messageTest'>chat messageTest</Link>
            <Link href='3dWorld'>3d Character move</Link>
            <Link href='PlayerWalk'>player walk</Link>
            <Link href='scrollStages'>scroll Stages</Link>
            <Link href='portalWlkIn'>portal Wlk In</Link>
            <Link href='PlayerAnimWithMixamo'>Player Anim With Mixamo</Link>
            <Link href='CleanWalk'>Clean Walk</Link>
            <Link href='map'>Map</Link>

            <Canvas />
        </main>
    )
}
