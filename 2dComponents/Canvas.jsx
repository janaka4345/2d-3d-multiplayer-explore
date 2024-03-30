'use client'
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./drawUtils/sketch";

// const sketch = (p5) => {
//     p5.setup = () => p5.createCanvas(600, 400);

//     p5.draw = () => {
//         p5.background(250);
//         p5.push();
//         p5.pop();
//     };
// };
export default function Canvas() {
  return (
     <NextReactP5Wrapper sketch={sketch} />
  )
}