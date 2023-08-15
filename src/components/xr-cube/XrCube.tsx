import Image from "next/image";
import { Inter } from "next/font/google";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const XrCube = () => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.02;
    // console.log("cubeRef?.current:::", cubeRef?.current);
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default XrCube;
