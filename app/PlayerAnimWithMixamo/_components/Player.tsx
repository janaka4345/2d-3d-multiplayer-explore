import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { MeshProps, PrimitiveProps, useFrame } from "@react-three/fiber"
import { Ref, forwardRef, useEffect } from "react"
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from "three"


const PlayerModel = (props: MeshProps, ref: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
    const player = useGLTF('./MyAvatar01.glb')
    const animationSalute = useFBX('./Salute.fbx')
    animationSalute.animations[0].name = 'salute'
    animationSalute.animations[0].tracks.forEach(element => {
        element.name = element.name.replace("mixamorig", "");

    });
    const animationArray = useAnimations(animationSalute.animations, player.scene)

    useFrame(() => {


    })
    useEffect(() => {
        console.log('1', player.nodes);
        console.log('2', animationSalute.animations[0].tracks);



        setTimeout(() => {
            console.log('ran');
            animationArray.actions.salute.play()
            // console.log(animationArray.actions.salute);

        }, 5000);


        return () => {

        }
    }, [animationSalute])


    return (
        <primitive ref={ref} object={player.scene} {...props} />
    )
}
const Player = forwardRef(PlayerModel)
export default Player