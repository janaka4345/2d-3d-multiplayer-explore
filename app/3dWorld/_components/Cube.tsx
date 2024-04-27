import { type MeshProps } from "@react-three/fiber"

const Cube = (props: MeshProps) => {
    return (
        <>
            <mesh {...props}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={'purple'} />
            </mesh>
        </>
    )
}
export default Cube