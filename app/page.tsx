import Canvas from '@/2dComponents/Canvas'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href='multiplayerRoom'>chat room</Link>
            <Link href='messageTest'>chat messageTest</Link>
            <Canvas />
        </main>
    )
}
