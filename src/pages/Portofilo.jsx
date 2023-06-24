import { headerColor } from "../constant/colors";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";

const ProjectPortfolio = () => {
  return (
    <div>
      <div className="title-container flex flex-col lg:flex-row">
        <h1
          className="sm:whitespace-wrap md:whitespace-wrap lg:whitespace-nowrap text-5xl pt-2 md:pt-2 lg:pt-2 text-center md:text-center lg:text-left md:pr-0 lg:pr-16"
          style={{ fontWeight: 700, color: headerColor }}
        >
          Project Portfolio
        </h1>
        <div className="text-container w-1/3 mx-auto text-center md:text-center lg:text-left">
          <p
            className="pt-4 sm:pt-4 lg:pt-4 pb-4 text-center lg:text-left"
            style={{ fontWeight: 300 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className="projects">
        <img src={project1} className="w-1/6" alt="Project1" />
        <img src={project2} className="w-1/6" alt="Project2" />
        <img src={project3} className="w-1/6" alt="Project3" />
        <img src={project4} className="w-1/6" alt="Project4" />
      </div>
    </div>
  );
};

export default ProjectPortfolio;
