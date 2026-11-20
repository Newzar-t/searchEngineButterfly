import { Environment } from "@react-three/drei";
import { LayerMaterial, Depth, Color } from "lamina";
import * as THREE from "three";

export default function SceneEnvironment() {
  return (
    <Environment background resolution={64}>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="blue"
            colorB="white"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </Environment>
  );
}
