import {
  PerspectiveCamera,
  /*   PresentationControls, */
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";

const cameraTarget = new THREE.Vector3(8.1, 1.5, 0);
const controlsTarget = new THREE.Vector3(8.1, 1.5, 0);

export default function UserCamera() {
  const userCamera = useRef();
  const controls = useRef();
  useHelper(userCamera, THREE.CameraHelper);

  useEffect(() => {
    userCamera.current.lookAt(cameraTarget);
    controls.current.target = controlsTarget;
  }, []);

  return (
    <PerspectiveCamera
      makeDefault
      ref={userCamera}
      fov={120}
      aspect={window.innerWidth / window.innerHeight}
      near={2}
      far={50}
      position={[0, 1, 0]}
    >
      <OrbitControls
        ref={controls}
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
      />
    </PerspectiveCamera>
  );
}
