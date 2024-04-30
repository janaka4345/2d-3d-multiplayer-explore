const Cube = () => {
    return (
        <mesh position={[0, 5, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color='yellow' />
        </mesh>
    )
}
export default Cube