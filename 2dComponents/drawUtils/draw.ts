import p5 from 'p5'
export default function draw(p5: p5) {
    return () => {
        p5.clear()
        p5.rect(300, 20, 150, 150)
        p5.push()
        p5.fill(255, 204, 0)
        p5.circle(50 + p5.frameCount, 50, 25)
        p5.pop()
        // p5.noLoop()
    }
}
