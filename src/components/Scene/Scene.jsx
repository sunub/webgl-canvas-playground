import Ground from "../Ground";
import { Stage } from "@react-three/drei";
import Sky from "../Sky";
import Clouds from "../Sky/Clouds";

function Scene() {
	return (
		<>
			<Stage
				environment={"sunset"}
				preset={"portrait"}
				adjustCamera={0.8}
			>
				<Ground />
				<Clouds />
			</Stage>
			<Sky />
		</>
	);
}

export default Scene;
