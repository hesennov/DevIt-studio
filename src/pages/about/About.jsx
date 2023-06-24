import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Comp from "../../components/lib/three/Comp";
import Computer from "../../components/lib/three/Computer";
const About = () => {
  return (
    <div className='h-screen'>
      <Canvas camera={{ fov: 110, position: [5, 2, -1] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Comp />
      </Canvas>
    </div>
  );
};
export default About;
