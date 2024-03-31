import type p5 from 'p5'
type particle = {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
}

console.log('ran')
const particles: particle[] = []
for (let index = 0; index < 50; index++) {
    const x = Math.random() * 599 + 1
    const y = Math.random() * 599 + 1
    const size = Math.random() * 50 + 10
    const speedX = Math.random() * 3 - 1.5
    const speedY = Math.random() * 3 - 1.5
    particles.push({ x, y, size, speedX, speedY })
}

export default function testDraw(p5: p5) {
    particles.forEach((particle: particle) => {
        p5.push()
        p5.noStroke()
        p5.fill(255, 204, 0)
        p5.circle(particle.x, particle.y, particle.size)
        p5.pop()
        if (particle.x > p5.width || particle.x < 0) {
            particle.speedX *= -1
        }
        if (particle.y > p5.height || particle.y < 0) {
            particle.speedY *= -1
        }
        particle.x += particle.speedX
        particle.y += particle.speedY
    })

    // p5.noLoop()
}
