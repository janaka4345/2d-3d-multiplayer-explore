const Cube = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='purple' />
    </mesh>
  )
}
export default Cube