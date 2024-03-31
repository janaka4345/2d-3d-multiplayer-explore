import { P5CanvasInstance } from "@p5-wrapper/react";

export default function setup(p5:P5CanvasInstance) {
    const canvasHeight = 600;
    const canvasWidth = 600;
    return () => {
        p5.createCanvas(canvasWidth, canvasHeight);
        // p5.background(255, 0, 0);

    };
}
 