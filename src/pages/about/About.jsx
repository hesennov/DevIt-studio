import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Char from "../../components/lib/three/Char";
import Computer from "../../components/lib/three/Computer";
const About = () => {
  return (
    <>
      <Canvas camera={{ fov: 30, position: [5, 2, -1] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Computer />
      </Canvas>
    </>
  );
};
export default About;
