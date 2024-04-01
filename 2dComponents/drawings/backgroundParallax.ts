import type p5 from 'p5'
import { useBackgroundImageStore } from '../../2dStore/backgroundImageStore'

export default function backgroundParallax(p5: p5) {
    const { images } = useBackgroundImageStore.getState()
    images.layer1 &&
        p5.image(images.layer1, 0, 0, 600, 600, p5.frameCount / 5, 0, 600, 720)
    images.layer2 &&
        p5.image(images.layer2, 0, 0, 600, 600, p5.frameCount / 4, 0, 600, 720)
    images.layer3 &&
        p5.image(images.layer3, 0, 0, 600, 600, p5.frameCount / 3, 0, 600, 720)
    images.layer4 &&
        p5.image(images.layer4, 0, 0, 600, 600, p5.frameCount / 2, 0, 600, 720)
    images.layer5 &&
        p5.image(images.layer5, 0, 0, 600, 600, p5.frameCount, 0, 600, 720)
}
