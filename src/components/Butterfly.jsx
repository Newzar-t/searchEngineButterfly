import { useRef } from "react";

export default function Butterfly(props) {
  return (
    <mesh ref={props.reference}>
      <meshNormalMaterial />
      <boxGeometry args={[5, 5, 5]} />
    </mesh>
  );
}
