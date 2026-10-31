import "./App.css";
import { Canvas } from "@react-three/fiber";
import Biome from "./components/Biome";
import {
  CameraControls,

  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";

function App() {
  const debugCamera = useRef();
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 25]} />
      <CameraControls />
      <ambientLight intensity={6} color={0xffffff} />
      <Biome />
    </Canvas>
  );
}

export default App;
