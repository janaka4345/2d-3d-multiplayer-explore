import type p5 from 'p5'

export default function setup(p5: p5) {
    const canvasHeight = 600
    const canvasWidth = 600
    return () => {
        p5.createCanvas(canvasWidth, canvasHeight)
        // p5.background(255, 0, 0);
    }
}
