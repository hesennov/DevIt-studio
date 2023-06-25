import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Comp from "../../components/lib/three/Comp";
import Computer from "../../components/lib/three/Computer";
const About = () => {
  return (
    <div className="  flex mt-50 mx-50 ">
      <div className="left flex-grow w-2/4">
        <h1 className="text-3xl text-stone-900 font-light">
          Empowering the World Through Code
        </h1>
        <p className="font-extralight text-l pt-10">
          We are the developers who code the world. With mastery and finesse, we
          intricately weave complex lines of code to savor the taste of a
          delightful solution. As a passionate and creative team, we harness the
          power of advanced technologies to shape the digital realm. We push the
          boundaries to inspire the innovations of tomorrow. The challenges we
          encounter each day fuel our motivation to build a better future. Our
          mission is to transform the world into a more sustainable, accessible,
          and intelligent place. Through strong partnerships with our clients,
          we strive to understand their needs and provide them with tailored
          solutions. Being a part of the change excites us, and it propels us to
          grow with every project. While exploring the endless possibilities
          technology offers, we not only solve problems but also focus on
          enhancing user experiences and adding value to people's lives. We
          believe that each line of code tells a story, and together, we work to
          present that story in the best possible way.
        </p>
      </div>
      <div className="right flex-grow w-2/4 pt-20 h-96">
        <Canvas   camera={{ fov: 100, position: [4, 2, -1] }}>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Comp />
        </Canvas>
      </div>
    </div>
  );
};
export default About;
