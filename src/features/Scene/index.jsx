import Ground from "../Ground";
import { Stage } from "@react-three/drei";
import Clouds from "../Sky/Clouds";
import { useProgress, Html } from "@react-three/drei";
import { useEffect, useState } from "react";

function Scene() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const isLoaded = progress === 100 && loaded === total;
    if (isLoaded) {
      setIsReady(true);
    }
  }, [progress, loaded, total]);

  if (!isReady) {
    return (
      <Html center>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
            fontSize: "2em",
            zIndex: 10,
            whiteSpace: "nowrap", // 줄 바꿈 방지
            padding: "0 20px", // 좌우 여백 추가
          }}
        >
          배경 {progress.toFixed(2)}% 로드 중...
        </div>
      </Html>
    );
  }

  return (
    <Stage environment={"sunset"} preset={"portrait"} adjustCamera={0.8}>
      <Ground />
      <Clouds />
    </Stage>
  );
}

export default Scene;
