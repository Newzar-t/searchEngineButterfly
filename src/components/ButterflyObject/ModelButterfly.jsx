/* eslint-disable react-hooks/refs */

export default function ModelButterfly(props) {
  return (
    <mesh ref={props.reference}>
      <meshNormalMaterial />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}
