import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { MeshProps, PrimitiveProps, useFrame } from "@react-three/fiber"
import { Ref, forwardRef, useEffect } from "react"
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three"


const PlayerModel = (props?: MeshProps, ref?: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {

    const player = useFBX('./MyAvatar01Copy.fbx')
    const playeranim = useFBX('./Waving Gesture (1).fbx')

    const animationArray = useAnimations(playeranim.animations, player)

    useFrame(() => {


    })
    useEffect(() => {


        setTimeout(() => {
            console.log(player);

            console.log(animationArray);
            animationArray.actions['mixamo.com'].play()

            // console.log('ran');
            // animationArray.actions.salute.play()
            // console.log(animationArray.actions.salute);

        }, 5000);


        return () => {

        }
    }, [])


    return (
        <primitive ref={ref} object={player} {...props} />
    )
}
const MixamoCharacter2 = forwardRef(PlayerModel)
export default MixamoCharacter2