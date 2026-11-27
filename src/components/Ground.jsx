import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

export function Model(props) {
  const { nodes } = useGLTF("/src/assets/envmodels/grassfieldproto.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrassFields.geometry}
        position={[0, -5, 0]}
      >
        <meshPhysicalMaterial color={0x4a733f} side={DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/src/assets/envmodels/grassfieldproto.glb");

export default function Ground() {
  return <Model />;
}
