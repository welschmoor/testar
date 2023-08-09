import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasInsides from "@/components/CanvasInsides/CanvasInsides";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      AWDIO IOAWJKEKEKE
      <div className="w-full min-h-screen">
        <Canvas  style={{ height: "600px" }}>
          <CanvasInsides />
        </Canvas>
      </div>
    </main>
  );
}
