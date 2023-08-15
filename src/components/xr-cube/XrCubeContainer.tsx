import { Canvas } from "@react-three/fiber";
import XrCube from "@/components/xr-cube/XrCube";
import { ARButton, XR } from "@react-three/xr";

const XrContainer = () => {
  return (
    <>
      <ARButton />
      <Canvas style={{ height: "600px" }}>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrContainer;
//style={{ height: "600px" }}
