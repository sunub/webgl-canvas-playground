import { Text3D, Center, useMatcapTexture } from "@react-three/drei";

const Title = () => {
	const [matcapTexture] = useMatcapTexture(
		"DEE3E8_A6AEB5_BCC4CC_BCC4C4",
		256
	);

	return (
		<>
			<Center position={[0, 800, 0]} scale={[3, 3, 3]}>
				<Text3D
					font={"/Nerko One_Regular.json"}
					size={100}
					height={0.2}
					curveSegments={12}
					bevelEnabled
					bevelThickness={10}
					bevelSize={2.5}
					bevelOffset={0}
					bevelSegments={10}
				>
					sunub
					<meshMatcapMaterial map={matcapTexture} />
				</Text3D>
			</Center>
		</>
	);
};

export default Title;
