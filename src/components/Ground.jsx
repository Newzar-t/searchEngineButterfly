import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Model() {
  const gltf = useLoader(
    GLTFLoader,
    "/src/assets/envmodels/grassfieldproto.glb",
  );

  gltf.scene.position.set(0, -5, 0);

  return <primitive object={gltf.scene}></primitive>;
}

export default function Ground() {
  return <Model />;
}

useGLTF.preload("/src/assets/envmodels/grassfieldproto.glb");
