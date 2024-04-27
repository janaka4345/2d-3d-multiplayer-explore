import { type MeshProps } from "@react-three/fiber"
import { type Ref, forwardRef } from "react"
import { type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three"


const CubeModel = (props: MeshProps, ref: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
    return (
        <>
            <mesh {...props} ref={ref}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={'purple'} />
            </mesh>
        </>
    )
}
const Cube = forwardRef(CubeModel)
export default Cube