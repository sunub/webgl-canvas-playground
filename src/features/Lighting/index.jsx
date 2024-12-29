import { Environment } from "@react-three/drei";
import React from "react";

function Lighting() {
	return (
		<group>
			<React.Suspense fallback={null}>
				<Environment preset="sunset" />
			</React.Suspense>

			<directionalLight position={[-0.5, 1, -0.5]} intensity={0.5} />
			<directionalLight position={[-1, 1, 1]} intensity={0.2} />
			<ambientLight intensity={0.5} />

			<directionalLight
				castShadow
				intensity={0.01}
				args={["#ffffff"]}
				position={[0, 100, -100]}
			/>
		</group>
	);
}

export default Lighting;
