/* eslint-disable no-useless-assignment */
import Ground from "./Ground";
import Butterfly from "./ButterflyObject/Butterfly";

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
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />
      <Butterfly />

      <Ground></Ground>
    </>
  );
}

export default Biome;
