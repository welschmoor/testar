import { Canvas } from "@react-three/fiber";

import { ARButton, XR } from "@react-three/xr";
import XrHitCube from "./XrHitCube";

const XrHitCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas style={{ height: "600px" }}>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitCubeContainer;
//style={{ height: "600px" }}
