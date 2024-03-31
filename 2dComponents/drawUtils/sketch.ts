import draw from './draw'
import mousePressed from './mousePressed'
import preload from './preload'
import setup from './setup'

import { type Sketch } from '@p5-wrapper/react'

const sketch: Sketch = (p5) => {
    p5.preload = preload(p5)
    p5.setup = setup(p5)
    p5.draw = draw(p5)
    p5.mousePressed = mousePressed(p5)
}
export default sketch
