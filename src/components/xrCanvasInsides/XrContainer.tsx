import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasInsides from "@/components/CanvasInsides/CanvasInsides";

const XrCanvasInsides = () => {
  return (
    <Canvas style={{ height: "600px" }}>
      <CanvasInsides />
    </Canvas>
  );
};
