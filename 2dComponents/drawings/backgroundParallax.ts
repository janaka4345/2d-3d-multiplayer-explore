import type p5 from 'p5'
import { useBackgroundImageStore } from '../../2dStore/backgroundImageStore'

export default function backgroundParallax(p5: p5) {
    const { images } = useBackgroundImageStore.getState()

    if (images.layer1) {
        p5.image(
            images.layer1,
            0,
            0,
            600,
            600,
            -2400 + ((p5.frameCount * 2) % 2400),
            0,
            600,
            720
        )
        p5.image(
            images.layer1,
            0,
            0,
            600,
            600,
            (p5.frameCount * 2) % 2400,
            0,
            600,
            720
        )
    }
    if (images.layer2) {
        p5.image(
            images.layer2,
            0,
            0,
            600,
            600,
            -2400 + ((p5.frameCount * 4) % 2400),
            0,
            600,
            720
        )
        p5.image(
            images.layer2,
            0,
            0,
            600,
            600,
            (p5.frameCount * 4) % 2400,
            0,
            600,
            720
        )
    }
    if (images.layer3) {
        p5.image(
            images.layer3,
            0,
            0,
            600,
            600,
            -2400 + ((p5.frameCount * 6) % 2400),
            0,
            600,
            720
        )
        p5.image(
            images.layer3,
            0,
            0,
            600,
            600,
            (p5.frameCount * 6) % 2400,
            0,
            600,
            720
        )
    }
    if (images.layer3) {
        p5.image(
            images.layer3,
            0,
            0,
            600,
            600,
            -2400 + ((p5.frameCount * 8) % 2400),
            0,
            600,
            720
        )
        p5.image(
            images.layer3,
            0,
            0,
            600,
            600,
            (p5.frameCount * 8) % 2400,
            0,
            600,
            720
        )
    }
    if (images.layer4) {
        p5.image(
            images.layer4,
            0,
            0,
            600,
            600,
            -2400 + ((p5.frameCount * 10) % 2400),
            0,
            600,
            720
        )
        p5.image(
            images.layer4,
            0,
            0,
            600,
            600,
            (p5.frameCount * 10) % 2400,
            0,
            600,
            720
        )
        if (images.layer5) {
            p5.image(
                images.layer5,
                0,
                0,
                600,
                600,
                -2400 + ((p5.frameCount * 12) % 2400),
                0,
                600,
                720
            )
            p5.image(
                images.layer5,
                0,
                0,
                600,
                600,
                (p5.frameCount * 12) % 2400,
                0,
                600,
                720
            )
        }
    }
}
