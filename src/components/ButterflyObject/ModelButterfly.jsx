import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes } = useGLTF("/src/assets/butterflymodels/testpapillon.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="papillon"
          castShadow
          receiveShadow
          geometry={nodes.papillon.geometry}
          material={nodes.papillon.material}
          position={[0, -0.109, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.318}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/butterflymodels/testpapillon.glb");

export default function ModelButterfly(props) {
  return <Model ref={props.reference} />;
}
