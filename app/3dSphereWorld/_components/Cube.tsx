const Cube = () => {
    return (
        <mesh position={[5, 3, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color='red' />
        </mesh>
    )
}
export default Cube