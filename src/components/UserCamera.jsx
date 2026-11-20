import {
  PerspectiveCamera,
  /*   PresentationControls, */
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
/* 
import { OrbitControls } from "@react-three/drei"; */
import { useFrame } from "@react-three/fiber";

export default function UserCamera() {
  const userCamera = useRef();
  /*   const controls = useRef(); */
  useHelper(userCamera, THREE.CameraHelper);

  useFrame((state) => {
    let mouseX = state.pointer.x;
    let mouseY = state.pointer.y;

    console.log(mouseX * 2, mouseY * 2);

    userCamera.current.rotation.y = Math.min(-(mouseX * 2), 1.5);
    userCamera.current.rotation.x = Math.min(mouseY * 2, 1.5);
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={userCamera}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={50}
      position={[0, 2, 0]}
    >
      {/*       <PresentationControls ref={controls} /> */}
    </PerspectiveCamera>
  );
}
