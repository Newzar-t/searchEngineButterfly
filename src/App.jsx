import "./App.css";
import { Canvas } from "@react-three/fiber";
import Biome from "./components/Biome";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import UserCamera from "./components/UserCamera";
function App() {
  return (
    <Canvas>
      <UserCamera></UserCamera>
      <ambientLight intensity={6} color={0xffffff} />
      <Biome />
    </Canvas>
  );
}

export default App;
