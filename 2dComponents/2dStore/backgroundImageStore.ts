import type p5 from 'p5'
import { create } from 'zustand'

// enum layer {
//     layer1,
//     layer2,
//     layer3,
//     layer4,
//     layer5,
// }

type backgroundImages = {
    layer1: p5.Image | null
    layer2: p5.Image | null
    layer3: p5.Image | null
    layer4: p5.Image | null
    layer5: p5.Image | null
}

type Action = {
    setLayer1: (image: p5.Image) => void
    setLayer2: (image: p5.Image) => void
    setLayer3: (image: p5.Image) => void
    setLayer4: (image: p5.Image) => void
    setLayer5: (image: p5.Image) => void
}

export const useBackgroundImageStore = create<backgroundImages & Action>(
    (set) => ({
        layer1: null,
        layer2: null,
        layer3: null,
        layer4: null,
        layer5: null,
        setLayer1: (image: p5.Image) => set(() => ({ layer1: image })),
        setLayer2: (image: p5.Image) => set(() => ({ layer2: image })),
        setLayer3: (image: p5.Image) => set(() => ({ layer3: image })),
        setLayer4: (image: p5.Image) => set(() => ({ layer4: image })),
        setLayer5: (image: p5.Image) => set(() => ({ layer5: image })),
    })
)
