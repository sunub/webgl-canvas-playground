import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

function Character(props) {
	const group = React.useRef(null);
	const { nodes, materials, animations } = useGLTF("/assets/character.gltf");
	const { actions } = useAnimations(animations, group);
	const { positionY } = useControls({
		positionY: {
			value: -1000,
			min: -2000,
			max: 1000,
			step: 0.01,
		},
	});

	return (
		<group ref={group} {...props} dispose={null} position-y={-887.86}>
			<group name="Scene">
				<group
					name="basicAnimation"
					position={[-0.01, -3.66, 0.58]}
					scale={2.52}
				>
					<primitive object={nodes.spine} />
					<skinnedMesh
						name="body"
						geometry={nodes.body.geometry}
						material={materials["skin.001"]}
						skeleton={nodes.body.skeleton}
					/>
				</group>
			</group>
		</group>
	);
}

export default Character;

useGLTF.preload("/assets/character.gltf");
