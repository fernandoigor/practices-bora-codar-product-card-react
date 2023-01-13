import { Canvas, useLoader } from "@react-three/fiber";
import Object, { ObjectPathInterface } from "./Object";
import { OrbitControls } from "@react-three/drei";

export default function Scene({ pathObj }: ObjectPathInterface) {
  return (
    <Canvas
      camera={{ position: [10, 10, 35], fov: 5, zoom: 0.8 }}
      style={{
        backgroundColor: "#d9cef9",
        width: "100%",
        height: "55%",
      }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="#bf8398" position={[0, 0, 1]} />
      <directionalLight color="#d89ab0" position={[0, 0, -1]} />
      <directionalLight color="#d89ab0" position={[5, 5, 0]} />
      <Object pathObj={pathObj} />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={-3}
        enableZoom={false}
      />
    </Canvas>
  );
}
