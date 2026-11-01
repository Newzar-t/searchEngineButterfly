import Ground from "./Ground";
import Butterfly from "./Butterfly";

function Biome() {
  return (
    <>
      <group>
        <Butterfly />
      </group>
      <Ground></Ground>
    </>
  );
}

export default Biome;
