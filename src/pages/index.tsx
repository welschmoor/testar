import XrHitCubeContainer from "@/components/xr-hit-cube/XrHitCubeContainer";
import XrHitModelContainer from "@/components/xr-hit-model/XrHitModelContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      Möbel Direkt!
      <div className="w-full min-h-screen">
        {/* <XrHitCubeContainer /> */}
        <XrHitModelContainer />
      </div>
    </main>
  );
}
