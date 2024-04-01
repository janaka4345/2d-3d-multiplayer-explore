import type p5 from 'p5'
import { useBackgroundImageStore } from '../../2dStore/backgroundImageStore'
import { useSpriteStore } from '@/2dStore/spriteStore'

export default function preload(p5: p5) {
    return () => {
        loadBackgroundLayers(p5)
        loadSprites(p5)
    }
}

function loadSprites(p5: p5) {
    const uvSprite = p5.loadImage('UV_checker_Map_byValle.jpg')
    const dogSprite = p5.loadImage('shadow_dog.png')
    useSpriteStore.getState().setUvSprite(uvSprite)
    useSpriteStore.getState().setDogSprite(dogSprite)
}
function loadBackgroundLayers(p5: p5) {
    const layer_1 = p5.loadImage('layer-1.png')
    const layer_2 = p5.loadImage('layer-2.png')
    const layer_3 = p5.loadImage('layer-3.png')
    const layer_4 = p5.loadImage('layer-4.png')
    const layer_5 = p5.loadImage('layer-5.png')

    useBackgroundImageStore.getState().setImages({
        layer1: layer_1,
        layer2: layer_2,
        layer3: layer_3,
        layer4: layer_4,
        layer5: layer_5,
    })
}
