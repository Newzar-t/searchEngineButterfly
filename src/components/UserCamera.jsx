import { PerspectiveCamera, useHelper, OrbitControls } from "@react-three/drei";
import { Object3D } from "three";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function moveCamera(camera) {
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      console.log("going up");
      camera.position.y = 10;
    } else return;
  });
}

export default function UserCamera() {
  const userCamera = useRef();
  useHelper(userCamera, THREE.CameraHelper);

  useFrame(() => {
    moveCamera(userCamera.current);
  });

  return (
    <group>
      <object3D position={[0, 0, 0]}>
        <PerspectiveCamera
          ref={userCamera}
          near={1}
          far={20}
          position={[0, 2, 0]}
        />
      </object3D>
    </group>
  );
}
