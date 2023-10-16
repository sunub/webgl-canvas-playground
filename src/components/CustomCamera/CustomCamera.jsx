import React from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

function CustomCamera() {
	const { camera, gl } = useThree();
	const controlsRef = React.useRef(null);

	useFrame(() => {
		if (controlsRef.current) {
			controlsRef.current.update();
		}
	});

	return (
		<OrbitControls
			ref={controlsRef}
			camera={camera}
			domElement={gl.domElement}
			enableDamping={true}
		/>
	);
}

export default CustomCamera;
