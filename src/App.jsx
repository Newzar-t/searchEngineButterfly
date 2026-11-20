import "./App.css";
import { Canvas } from "@react-three/fiber";
import Biome from "./components/Biome";
import SearchEngine from "./components/SearchEngine";

import UserCamera from "./components/UserCamera";
function App() {
  return (
    <>
      <SearchEngine />
      <Canvas>
        <UserCamera></UserCamera>
        <ambientLight intensity={6} color={0xffffff} />
        <Biome />
      </Canvas>
    </>
  );
}

export default App;
