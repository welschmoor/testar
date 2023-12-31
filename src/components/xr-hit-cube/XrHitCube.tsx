import { OrbitControls } from "@react-three/drei";
import { Matrix4 } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import XrCube from "./XrCube";

type PlacedCube = {
  position: any;
  id: number;
};

const XrHitCube = () => {
  const { isPresenting } = useXR();

  const reticleRef = useRef();
  const [cubes, setCubes] = useState<PlacedCube[]>([]);

  useHitTest((hitMatrix: Matrix4, hit: XRHitTestResult) => {
    hitMatrix.decompose(
      reticleRef?.current?.position,
      reticleRef?.current?.quaternion,
      reticleRef?.current?.scale
    );

    reticleRef?.current?.rotation?.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes((prev) => [
      ...prev,
      {
        position,
        id,
      },
    ]);
  };
  console.log("isPresenting:::", isPresenting);
  return (
    <>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        cubes.map((cube) => {
          return <XrCube key={cube.id} position={cube.position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <XrCube />}
    </>
  );
};

export default XrHitCube;
