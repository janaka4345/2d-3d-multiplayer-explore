import type p5 from 'p5'
import backgroundParallax from '../drawings/backgroundParallax'
import spriteTest from '../drawings/spriteTest'
import metaBalls from '../drawings/metaBalls'
// import testDraw from '../drawings/testDraw'

export default function draw(p5: p5) {
    return () => {
        p5.clear()
        p5.background(0)

        // testDraw(p5)
        // backgroundParallax(p5)
        // spriteTest(p5)
        metaBalls(p5)
        // p5.noLoop()
    }
}
