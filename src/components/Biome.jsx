/* eslint-disable no-useless-assignment */
import Ground from "./Ground";
import Butterfly from "./Butterfly";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Path from "./Path";

function animateMovement(obj, path, time) {
  let hasLoopEnded = false;
  let progression = Math.min(time / 10, 1);
  if (progression === 1) {
    hasLoopEnded = true;
  } else {
    hasLoopEnded = false;
  }
  while (time === 1) {
    hasLoopEnded ? (progression = 0) : (progression = Math.min(0.1 / 10, 1));
  }
  const position = path.current.getPointAt(progression);
  obj.current.position.copy(position);
}

function Biome() {
  const butterflyRef = useRef();
  const pathRef = useRef();

  useEffect(() => {});

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    animateMovement(butterflyRef, pathRef, time);
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
