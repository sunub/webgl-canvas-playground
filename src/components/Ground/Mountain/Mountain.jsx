import * as THREE from "three";
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

useGLTF.preload("/assets/scene.gltf");

function Mountain() {
	const { nodes } = useGLTF("/assets/scene.gltf");
	const texture = useTexture("/assets/scene.png");
	texture.flipY = false;
	texture.encoding = THREE.sRGBEncoding;
	("/assets/scene.gltf");

	return (
		<mesh
			castShadow
			receiveShadow
			geometry={nodes.ground.geometry}
			position={[-69.16, 19.49, 3.83]}
			rotation={[0, 1.57, 0]}
		>
			<meshBasicMaterial map={texture} />
		</mesh>
	);
}

export default Mountain;
