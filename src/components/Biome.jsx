/* eslint-disable no-useless-assignment */
import Ground from "./Ground";
import Butterfly from "./ButterflyObject/Butterfly";
import BiomeBox from "./BiomeBox";

let results = 10;

/* function ButterflyGenerator() {
  for (let i = 0; i < results; i++) {
    return <Butterfly />;
  }
} */

function Biome() {
  return (
    <>
      <Butterfly />
      <Butterfly />

      <Butterfly />
      <Butterfly />
      <Butterfly /><Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />

      <BiomeBox></BiomeBox>
      <Ground></Ground>
    </>
  );
}

export default Biome;
