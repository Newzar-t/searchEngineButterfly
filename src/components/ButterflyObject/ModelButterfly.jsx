import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function ModelButterfly(props) {
  const model = useGLTF("/src/assets/butterflymodels/butterflyPrototype.glb");
  const materialButterfly = new THREE.MeshNormalMaterial();

  return (
    <group {...props} name="Scene" animations={model.animations}>
      <mesh
        name="body"
        castShadow
        receiveShadow
        geometry={model.nodes.body.geometry}
        material={materialButterfly}
        position={[0, 0, 0.056]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.074}
      />
      <mesh
        name="leftWing"
        castShadow
        receiveShadow
        geometry={model.nodes.leftWing.geometry}
        material={materialButterfly}
        rotation={[0, 0, -0.027]}
        scale={0.074}
      />
      <mesh
        name="rightWing"
        castShadow
        receiveShadow
        geometry={model.nodes.rightWing.geometry}
        material={materialButterfly}
        rotation={[0, 0, 0.027]}
        scale={0.074}
      />
    </group>
  );
}

useGLTF.preload("/src/assets/butterflymodels/butterflyPrototype.glb");
