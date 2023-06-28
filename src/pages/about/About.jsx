import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Comp from "../../components/lib/three/Comp";
import Container from "../../components/lib/container/Container";
import { headerColor } from "../../constant/colors";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto text-center">
        <div className="md:w-full">
          <h1
            className="text-5xl pt-20 md:pt-20 lg:pt-20 lg:z-1 text-center font-bold"
            style={{ color: headerColor }}
          >
            Empowering the World Through Code
          </h1>
          <p className="font-extralight text-l pt-10">
            We are the developers who code the world. With mastery and finesse,
            we intricately weave complex lines of code to savor the taste of a
            delightful solution. As a passionate and creative team, we harness
            the power of advanced technologies to shape the digital realm. We
            push the boundaries to inspire the innovations of tomorrow. The
            challenges we encounter each day fuel our motivation to build a
            better future. Our mission is to transform the world into a more
            sustainable, accessible, and intelligent place. Through strong
            partnerships with our clients, we strive to understand their needs
            and provide them with tailored solutions. Being a part of the change
            excites us, and it propels us to grow with every project. While
            exploring the endless possibilities technology offers, we not only
            solve problems but also focus on enhancing user experiences and
            adding value to people&apos;s lives. We believe that each line of
            code tells a story, and together, we work to present that story in
            the best possible way.
          </p>
        </div>
        <div
          className="w-full pt-20 sm:pt-24 lg:pt-30 pl-0 sm:pl-0 md:pl-0 lg:pl-20"
          style={{ maxHeight: "50vh" }}
        >
          <div
            style={{
              position: "relative",
              paddingTop: "100%",
              marginBottom: "-150px",
            }}
          >
            <Canvas
              camera={{ position: [0, 0, 8], near: 0.01, far: 100 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <OrbitControls
                enableZoom={false}
                autoRotate={true}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
              <ambientLight intensity={1} />
              <directionalLight position={[0, 1, 1]} />
              <Comp />
            </Canvas>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
