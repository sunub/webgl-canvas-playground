import { Suspense } from "react";
import Crystar from "./Crystar";
import Lantern from "./Lantern";
import Mountain from "./Mountain";

function Ground() {
  return (
    <group position={[0, -1000, 0]} scale={[5, 5, 5]}>
      <Suspense fallback={null}>
        <Mountain />
      </Suspense>
      <Suspense fallback={null}>
        <Crystar />
      </Suspense>
      <Suspense fallback={null}>
        <Lantern />
      </Suspense>
    </group>
  );
}

export default Ground;
