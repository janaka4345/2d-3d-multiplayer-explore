import type p5 from 'p5'
import { create } from 'zustand'
type images = {
    layer1: p5.Image | null
    layer2: p5.Image | null
    layer3: p5.Image | null
    layer4: p5.Image | null
    layer5: p5.Image | null
}

type backgroundImages = {
    images: images
}

type Action = {
    setImages: (bImages: images) => void
}

export const useBackgroundImageStore = create<backgroundImages & Action>(
    (set) => ({
        images: {
            layer1: null,
            layer2: null,
            layer3: null,
            layer4: null,
            layer5: null,
        },
        setImages: (bImages) => set({ images: bImages }),
    })
)
