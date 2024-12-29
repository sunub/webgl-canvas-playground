import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Vector2 } from "three";

const OverlayMaterial = shaderMaterial(
  // uniforms
  {
    uAlpha: 1,
  },
  // vertex shader
  `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float uAlpha;

    void main() {
      gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
    }
  `
);

OverlayMaterial.transparent = true;

extend({ OverlayMaterial });

export function Overlay() {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 1, 1]} />
      <OverlayMaterial />
    </mesh>
  );
}
