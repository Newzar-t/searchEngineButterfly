import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { PointerLockControls } from "@react-three/drei";

export default function UserCamera(props) {
  const userCamera = useRef();
  useHelper(userCamera, THREE.CameraHelper);

  return (
    <PerspectiveCamera
      makeDefault
      ref={userCamera}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={1}
      far={20}
      position={[0, 2, 0]}
    >
      <PointerLockControls />
    </PerspectiveCamera>
  );
}
