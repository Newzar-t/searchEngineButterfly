/* eslint-disable no-useless-assignment */
import Ground from "./Ground";
import Butterfly from "./Butterfly";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Path from "./Path";

function animateMovement(obj, path, time) {
  const movement = () => {
    let progression = Math.min((time / 10) % 1);
    let position = path.current.getPointAt(progression);
    obj.current.position.copy(position);
  };
  movement();
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
