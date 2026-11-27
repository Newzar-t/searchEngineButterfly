import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const group = useRef();
  const model = useGLTF("/src/assets/butterflymodels/butterflyPrototype.glb");

  const mixer = new THREE.AnimationMixer(model.scene);

  const materialButterfly = new THREE.MeshNormalMaterial();

  useEffect(() => {
    model.animations.forEach((clip) => {
      mixer.clipAction(clip).play();
      console.log(clip);
    });
  }, []);

  useFrame(({ clock }) => {
    mixer.update(1 / 60);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
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
    </group>
  );
}

useGLTF.preload("/src/assets/butterflymodels/butterflyPrototype.glb");

export default function ModelButterfly(props) {
  return <Model ref={props.reference} />;
}
