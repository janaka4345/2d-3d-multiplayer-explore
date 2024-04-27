import { type MeshProps } from "@react-three/fiber"
import { Ref, forwardRef } from "react"
import { type BufferGeometry, type Material, type Mesh, type NormalBufferAttributes, type Object3DEventMap } from "three"


const SphereMesh = (props: MeshProps, ref: Ref<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>) => {
    return (
        <>
            <mesh {...props} ref={ref}  >
                <sphereGeometry args={[2, 20, 20]} />
                <meshStandardMaterial color={'red'} />
            </mesh>
        </>
    )
}
const Sphere = forwardRef(SphereMesh)
export default Sphere