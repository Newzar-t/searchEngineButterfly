import Ground from "./Ground";
import Butterfly from "./Butterfly";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Path from "./Path";

function animateMovement() {}

function Biome() {
  const butterflyRef = useRef();
  const pathRef = useRef();

  let time;

  useEffect(() => {
    console.log(pathRef.current.points);
  });

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    let progression = Math.min(time / 10, 1);
    if (time === 1) progression = Math.min(0.1 / 10, 1);

    const position = pathRef.current.getPointAt(progression);
    butterflyRef.current.position.copy(position);
  });

  return (
    <>
      <Butterfly reference={butterflyRef} />
      <Path reference={pathRef} />
      <Ground></Ground>
    </>
  );
}

export default Biome;
