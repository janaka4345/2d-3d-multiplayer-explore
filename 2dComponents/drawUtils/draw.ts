import type p5 from 'p5'
// import backgroundParallax from '../drawings/backgroundParallax'
import spriteTest from '../drawings/spriteTest'
// import testDraw from '../drawings/testDraw'

export default function draw(p5: p5) {
    return () => {
        p5.clear()

        // testDraw(p5)
        // backgroundParallax(p5)
        spriteTest(p5)
        // p5.noLoop()
    }
}
