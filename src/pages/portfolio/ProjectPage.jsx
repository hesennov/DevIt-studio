import Container from "../../components/lib/container/Container";
import { headerColor } from "../../constant/colors";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project3.webp";
import project3 from "../../assets/project4.webp";

const ProjectPage = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-col lg:flex-row mx-auto text-center lg:gap-20">
        <div className="md:w-full">
          <h1
            className="text-5xl pt-20 md:pt-20 lg:pt-20 lg:z-1 text-center font-bold"
            style={{ color: headerColor }}
          >
            Case studies
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
        <div className="flex flex-row">
          <img src={project1} alt="project1" className="pt-10" />
        </div>
      </div>
      <div className="flex flex-col w-full sm: w-full md:w-full lg:w-1/2 sm:flex-col lg:flex-row md:flex-col ">
        <img src={project2} alt="project1" className="pt-10" />
        <img src={project3} alt="project1" className="pt-10" />
      </div>
    </Container>
  );
};

export default ProjectPage;
