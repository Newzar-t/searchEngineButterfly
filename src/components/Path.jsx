import { CatmullRomLine } from "@react-three/drei";
import { Vector3 } from "three";
import { color } from "three/src/Three.TSL.js";

function Path(props) {
  const curvePoints = [
    new Vector3(-10, 0, 10),
    new Vector3(-5, 5, 5),
    new Vector3(0, 0, 0),
    new Vector3(5, -5, 5),
    new Vector3(10, 0, 10),
  ];

  return (
    <catmullRomCurve3
      ref={props.reference}
      points={curvePoints}
      closed={true}
      args={[{ color: 0xff0000 }]}
    ></catmullRomCurve3>
  );
}

export default Path;
