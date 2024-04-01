import { useSpriteStore } from '@/2dStore/spriteStore'
import type p5 from 'p5'

const uvMap = useSpriteStore.getState().uvSprite

export default function spriteTest(p5: p5) {
    p5.push()
    p5.stroke(0, 0, 0)
    if (uvMap) {
        const spriteHeight = uvMap.width / 8
        const spriteWidth = uvMap.height / 8
        p5.image(
            uvMap,
            0,
            0,
            100,
            100,
            spriteWidth * (Math.floor(p5.frameCount * 0.05) % 8),
            spriteHeight * 0,
            spriteWidth,
            spriteHeight
        )
    }
    p5.pop()
}
