import "./App.css";
import { Canvas } from "@react-three/fiber";
import Biome from "./components/Biome";
import SearchEngine from "./components/SearchEngine";
import UserCamera from "./components/UserCamera";
import SceneEnvironment from "./components/SceneEnvironment";

function App() {
  return (
    <>
      <SearchEngine />
      <Canvas>
        <UserCamera></UserCamera>
        <ambientLight intensity={6} color={0xffffff} />
        <Biome /> <SceneEnvironment />
      </Canvas>
    </>
  );
}

export default App;
