import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function UserCamera() {
  const userCamera = useRef();
  const controls = useRef();
  useHelper(userCamera, THREE.CameraHelper);

  const initialTarget = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    userCamera.current.lookAt(initialTarget);
  }, []);

  useFrame(() => {});

  return (
    <PerspectiveCamera
      makeDefault
      ref={userCamera}
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={50}
      position={[0, 10, 0]}
    >
      <OrbitControls ref={controls} enableDamping={true} enableZoom={false} />
    </PerspectiveCamera>
  );
}
