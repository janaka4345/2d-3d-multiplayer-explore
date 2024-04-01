import type p5 from 'p5'
import { create } from 'zustand'
type spriteImage = {
    uvSprite: p5.Image | null
    dogSprite: p5.Image | null
}
type Action = {
    setUvSprite: (image: p5.Image) => void
    setDogSprite: (image: p5.Image) => void
}

export const useSpriteStore = create<spriteImage & Action>((set) => ({
    uvSprite: null,
    dogSprite: null,
    setUvSprite: (image) =>
        set({
            uvSprite: image,
        }),
    setDogSprite: (image) =>
        set({
            dogSprite: image,
        }),
}))
