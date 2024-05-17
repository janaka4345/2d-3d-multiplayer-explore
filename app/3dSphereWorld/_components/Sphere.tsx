const Sphere = () => {
    return (
        <mesh position={[0, 3, 0]}>
            <sphereGeometry args={[2]} />
            <meshStandardMaterial color='blue' />
        </mesh>
    )
}
export default Sphere