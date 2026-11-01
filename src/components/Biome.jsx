import Ground from "./Ground";
import Butterfly from "./Butterfly";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Biome() {
  const butterflyRef = useRef();

  useFrame(({ clock }) => {
    butterflyRef.current.rotation.x = clock.elapsedTime;
  });
  return (
    <>
      <Butterfly reference={butterflyRef} position={[5, 2, 5]} />
      <Ground></Ground>
    </>
  );
}

export default Biome;
