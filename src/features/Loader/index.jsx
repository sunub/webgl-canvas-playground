// Loader.jsx
import { Html, useProgress } from "@react-three/drei";
import React from "react";

function Loader() {
  const { progress } = useProgress();
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
        전체 화면 {progress.toFixed(2)}% 로드 중...
      </div>
    </Html>
  );
}

export { Loader };
