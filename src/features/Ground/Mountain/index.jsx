import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";

useGLTF.preload("/models/scene_high.gltf");

function Mountain() {
  const hightDetail = useGLTF("/models/scene_high.gltf");
  const texture = useTexture("/textures/scene.png", (texture) => {
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = 1;
    return texture;
  });

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={hightDetail.nodes.ground.geometry}
      position={[-69.16, 19.49, 3.83]}
      rotation={[0, 1.57, 0]}
    >
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Mountain;
