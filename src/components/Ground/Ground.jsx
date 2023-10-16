import Crystar from "./Crystar";
import Lantern from "./Lantern";
import Mountain from "./Mountain";

function Ground() {
	return (
		<group position={[0, -1000, 0]} scale={[5, 5, 5]}>
			<Mountain />
			<Crystar />
			<Lantern />
		</group>
	);
}

export default Ground;
