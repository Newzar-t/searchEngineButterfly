import ModelButterfly from "./ModelButterfly";
import trajectories from "./trajectory";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function animateMovement(obj, path, time) {
  const movement = () => {
    let progression = Math.min((time / 10) % 1);
    let position = path.current.getPointAt(progression);
    obj.current.position.copy(position);
  };
  movement();
}

export default function Butterfly() {
  const butterflyRef = useRef();
  const trajectoryRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    animateMovement(butterflyRef, trajectoryRef, time);
  });

  return (
    <group>
      <ModelButterfly reference={butterflyRef} />
      <catmullRomCurve3
        ref={trajectoryRef}
        points={trajectories[getRandomInt(trajectories.length)]}
        closed={true}
        args={[{ color: 0xff0000 }]}
      ></catmullRomCurve3>
    </group>
  );
}
