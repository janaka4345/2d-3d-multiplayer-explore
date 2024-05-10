import { useGLTF } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber";
import { MutableRefObject, Ref, forwardRef, useEffect } from "react";
import { Group, type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three";

const PlayerModel = (props: MeshProps, ref: MutableRefObject<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
    const player = useGLTF('./Character_Soldier.gltf')
    const WEAPONS = [
        "GrenadeLauncher",
        "AK",
        "Knife_1",
        "Knife_2",
        "Pistol",
        "Revolver",
        "Revolver_Small",
        "RocketLauncher",
        "ShortCannon",
        "SMG",
        "Shotgun",
        "Shovel",
        "Sniper",
        "Sniper_2",
    ];
    const weapon = "Pistol"
    useEffect(() => {
        // console.log(player);
        player.scene.traverse((child) => {
            if (child.isObject3D) {
                child.castShadow = true;
            }
        });
        WEAPONS.forEach((wp) => {
            const isCurrentWeapon = wp === weapon;
            player.nodes[wp].visible = isCurrentWeapon;
        });
        return () => {

        }
    }, [])
    return (
        <primitive ref={ref} object={player.scene} {...props} />
    )
}
const Player = forwardRef(PlayerModel)
export default Player