// App.jsx
import { Canvas } from "@react-three/fiber";
import CustomCamera from "./features/CustomCamera";
import Lighting from "./features/Lighting";
import Scene from "./features/Scene";
import { Suspense } from "react";
import { Loader } from "./features/Loader";
import Sky from "./features/Sky";

function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Scene />
        <Sky />
      </Suspense>
      <ambientLight intensity={0.1} />
      <Lighting />
      <CustomCamera />
    </Canvas>
  );
}

export default App;
