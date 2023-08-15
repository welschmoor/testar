import Image from "next/image";
import { Inter } from "next/font/google";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const modelPath = "/models/table.gltf";

const XrModel = ({ position, ...props }: { position?: any }) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  // const gltf = useLoader(GLTFLoader, modelPath);

  return (
    <group {...props} dispose={null}>
      <group position={position} scale={1.434}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.MetalBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.DeskWood}
        />
      </group>
    </group>
  );
};
useGLTF.preload(modelPath);

export default XrModel;
