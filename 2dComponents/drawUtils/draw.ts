import type p5 from 'p5'
type particle = {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
}
export default function draw(p5: p5) {
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
    console.log(particles)

    return () => {
        p5.clear()
        p5.rect(300, 20, 150, 150)
        p5.push()
        p5.fill(255, 204, 0)
        p5.circle(200 + Math.sin(p5.frameCount / 100) * 100, 50, 25)
        p5.pop()
        particles.forEach((particle: particle) => {
            p5.push()
            p5.fill(255, 204, 0)
            p5.circle(particle.x, particle.y, particle.size)
            p5.pop()
            particle.x += particle.speedX
            particle.y += particle.speedY
        })

        // p5.noLoop()
    }
}
