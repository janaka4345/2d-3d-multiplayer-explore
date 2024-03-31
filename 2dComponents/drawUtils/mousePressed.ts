import type p5 from 'p5'

export default function mousePressed(p5: p5) {
    return () => {
        // console.log(p5.frameRate())
        p5.push()
        p5.fill(255, 0, 0)
        p5.circle(p5.mouseX, p5.mouseY, 50)
        p5.fill(0, 255, 0)
        p5.circle(p5.mouseY, p5.mouseX, 50)
        p5.pop()
    }
}
