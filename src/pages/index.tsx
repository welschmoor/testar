import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import XrCanvasInsides from "@/components/xr-cube/XrCube";
import XrContainer from "@/components/xr-cube/XrCubeContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      AWDIO IOAWJKEKEKE
      <div className="w-full min-h-screen">
        <XrContainer />
      </div>
    </main>
  );
}
