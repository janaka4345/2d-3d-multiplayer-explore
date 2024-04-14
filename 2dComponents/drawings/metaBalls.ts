import type p5 from 'p5'

type Balls = {
    x: number
    y: number
    radius: number
    speedX: number
    speedY: number
}

const balls: Balls[] = []

for (let index = 0; index < 10; index++) {
    const x = Math.floor(Math.random() * 5) + 200
    const y = Math.floor(Math.random() * 5) + 200
    const radius = Math.floor(Math.random() * 50 + 40)
    const speedX = Math.random() * 5 - 2.5
    const speedY = Math.random() * 5 - 2.5
    balls.push({ x, y, radius, speedX, speedY })
}
// console.log(balls)

const metaBalls = (p5: p5) => {
    balls.forEach((element, i) => {
        // console.log(p5.frameRate())

        p5.push()
        p5.fill(255, 0, 0)
        p5.noStroke()
        p5.circle(element.x, element.y, element.radius)
        // p5.filter('blur', 20)
        // p5.filter('dilate', 100)
        p5.pop()
        element.x += element.speedX
        element.y += element.speedY
        element.x > p5.width || element.x < 0 ? (element.speedX *= -1) : null
        element.y > p5.height || element.y < 0 ? (element.speedY *= -1) : null
    })
}
export default metaBalls
