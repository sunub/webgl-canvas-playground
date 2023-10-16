import { Canvas } from "@react-three/fiber";
import CustomCamera from "./components/CustomCamera"
import Lighting from "./components/Lighting";
import Scene from "./components/Scene/Scene";

function App() {

  return (
    <Canvas>
      <Scene />
      <ambientLight intensity={0.1} />
      <Lighting />
      <CustomCamera />
    </Canvas>
  )
}

export default App
