import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ModelButterfly(props) {
  const model = useGLTF("/src/assets/butterflymodels/butterflyPrototype.glb");

  return (
    <group
      {...props}
      onClick={props.handleClick}
      name="Scene"
      animations={model.animations}
    >
      <mesh
        name="body"
        castShadow
        receiveShadow
        geometry={model.nodes.body.geometry}
        position={[0, 0, 0.056]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.074}
      >
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>

      <mesh
        name="leftWing"
        castShadow
        receiveShadow
        geometry={model.nodes.leftWing.geometry}
        rotation={[0, 0, -0.027]}
        scale={0.074}
      >
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
      <mesh
        name="rightWing"
        castShadow
        receiveShadow
        geometry={model.nodes.rightWing.geometry}
        rotation={[0, 0, 0.027]}
        scale={0.074}
      >
        <meshNormalMaterial side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/src/assets/butterflymodels/butterflyPrototype.glb");
