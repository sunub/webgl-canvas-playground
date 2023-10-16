import { useGLTF } from "@react-three/drei";

useGLTF.preload("/assets/crystar.gltf");

function Crystar({ ...delegated }) {
	const { nodes, materials } = useGLTF("/assets/crystar.gltf");

	return (
		<group {...delegated}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.crystarLight001.geometry}
				material={materials.mainCrystar}
				position={[4.76, 22.58, -7.98]}
				rotation={[Math.PI, -0.81, Math.PI]}
				scale={[-1.12, -2.32, -0.94]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Icosphere.geometry}
				material={materials.gateCrystar}
				position={[4.82, 32.94, 36.26]}
				scale={2}
			/>
		</group>
	);
}

export default Crystar;
