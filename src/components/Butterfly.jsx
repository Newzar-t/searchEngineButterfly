export default function Butterfly(props) {
  return (
    <mesh ref={props.reference} position={props.position}>
      <meshNormalMaterial />
      <boxGeometry args={[0.5, 0.5, 0.5]} />
    </mesh>
  );
}
