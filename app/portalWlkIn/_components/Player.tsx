import { useGLTF } from "@react-three/drei"
import { MeshProps } from "@react-three/fiber"
import { useEffect } from "react"


const Player = (props: MeshProps) => {
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
        WEAPONS.forEach((wp) => {
            const isCurrentWeapon = wp === weapon;
            player.nodes[wp].visible = isCurrentWeapon;
        });

        return () => {

        }
    }, [])

    return (
        <primitive object={player.scene} {...props} />
    )
}
export default Player