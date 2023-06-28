import { headerColor } from "../constant/colors";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project3.webp";
import project3 from "../assets/project4.webp";

const ProjectPortfolio = () => {
  return (
    <div className="pb-20">
      <div className="title-container flex flex-col lg:flex-row">
        <h1
          className="sm:whitespace-wrap md:whitespace-wrap lg:whitespace-nowrap text-5xl pt-2 md:pt-2 lg:pt-2 text-center md:text-center lg:text-left md:pr-0 lg:pr-16 font-bold"
          style={{ color: headerColor }}
        >
          Project Portfolio
        </h1>
        <div className="text-container lg:w-1/3 mx-auto text-center md:text-center lg:text-left">
          <p className="pt-4 sm:pt-4 lg:pt-4 pb-4 text-center lg:text-left font-light">
            Our project portfolio shows our accomplishments, skills, and
            expertise in the industry.
          </p>
          <Link to="/portfolio">
            <button className="mb-10 rounded-xl text-xs uppercase font-light text-indigo-400 hover:text-indigo-800">
              View all &rarr;
            </button>
          </Link>
        </div>
      </div>
      <div className="projects grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        <img src={project1} className="max-w-full" alt="Project1" />
        <img src={project2} className="max-w-full" alt="Project3" />
        <img src={project3} className="max-w-full" alt="Project4" />
      </div>
    </div>
  );
};

export default ProjectPortfolio;
