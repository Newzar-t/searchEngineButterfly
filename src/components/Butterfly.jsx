



export default function Butterfly() {
  return (
    <mesh position={[5, 1, 3]}>
      <meshNormalMaterial />
      <boxGeometry args={[0.5, 0.5, 0.5]} />
    </mesh>
  );
}
