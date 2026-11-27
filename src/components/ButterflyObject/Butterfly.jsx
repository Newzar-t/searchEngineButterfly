import ModelButterfly from "./ModelButterfly";
import trajectories from "./trajectory";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function wingMovement(obj, mixer) {
  const animClips = [...obj.current.animations];
  animClips.forEach((clip) => {
    const action = mixer.clipAction(clip, obj.current);
    action.play();
  });
}

function animateMovement(obj, path, time) {
  const movement = () => {
    let progression = Math.min((time / 10) % 1);
    let position = path.current.getPointAt(progression);
    obj.current.position.copy(position);
  };
  movement();
}

function onPointer() {
  console.log("butterfly found!");
}

export default function Butterfly() {
  const mixer = new THREE.AnimationMixer();
  const butterflyRef = useRef();
  const trajectoryRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    mixer.update(1 / 60);
    animateMovement(butterflyRef, trajectoryRef, time);
  });

  useEffect(() => {
    wingMovement(butterflyRef, mixer);
  }, []);

  return (
    <group>
      <ModelButterfly ref={butterflyRef} onPointer={onPointer()} />
      <catmullRomCurve3
        ref={trajectoryRef}
        points={trajectories[getRandomInt(trajectories.length)]}
        closed={true}
        args={[{ color: 0xff0000 }]}
      ></catmullRomCurve3>
    </group>
  );
}
