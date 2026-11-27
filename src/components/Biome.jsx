/* eslint-disable no-useless-assignment */
import Ground from "./Ground";
import Butterfly from "./ButterflyObject/Butterfly";
import BiomeBox from "./BiomeBox";

/* function ButterflyGenerator() {
  for (let i = 0; i < results; i++) {
    return <Butterfly />;
  }
} */

function Biome() {
  return (
    <>
      <Butterfly />

      <BiomeBox></BiomeBox>
      <Ground></Ground>
    </>
  );
}

export default Biome;
