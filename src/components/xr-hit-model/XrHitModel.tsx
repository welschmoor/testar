import { OrbitControls } from "@react-three/drei";
import { Matrix4 } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import XrModel from "./XrModel";

type PlacedModel = {
  position: any;
  id: number;
};

const XrHitModel = () => {
  const { isPresenting } = useXR();

  const reticleRef = useRef();
  const [models, setModels] = useState<PlacedModel[]>([]);

  useHitTest((hitMatrix: Matrix4, hit: XRHitTestResult) => {
    hitMatrix.decompose(
      reticleRef?.current?.position,
      reticleRef?.current?.quaternion,
      reticleRef?.current?.scale
    );

    reticleRef?.current?.rotation?.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([
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
        models.map((model) => {
          return <XrModel key={model.id} position={model.position} />;
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <XrModel />}
    </>
  );
};

export default XrHitModel;
