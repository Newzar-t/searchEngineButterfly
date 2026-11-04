import Ground from "./Ground";
import Butterfly from "./Butterfly";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Biome() {
  const butterflyRef = useRef();
  const smoothness = 0.001;

  let originalPos = new THREE.Vector3(0, 0, 0);
  let hoverPos = new THREE.Vector3(10, 0, 5);
  let newPos = new THREE.Vector3(-20, 0, -8);

  useEffect(() => {
    originalPos.copy(butterflyRef.current.position);
  });

  useFrame(({ clock }) => {
    butterflyRef.current.rotation.x = clock.elapsedTime;

    butterflyRef.current.position.lerp(hoverPos, smoothness);
  });

  return (
    <>
      <Butterfly reference={butterflyRef} />
      <Ground></Ground>
    </>
  );
}

export default Biome;
