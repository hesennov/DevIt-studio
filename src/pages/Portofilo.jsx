import { headerColor } from "../constant/colors";
import { primaryColor } from "../constant/colors";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project3.webp";
import project3 from "../assets/project4.webp";

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
        <div className="text-container lg:w-1/3 mx-auto text-center md:text-center lg:text-left">
          <p
            className="pt-4 sm:pt-4 lg:pt-4 pb-4 text-center lg:text-left"
            style={{ fontWeight: 300 }}
          >
            Our project portfolio shows our accomplishments, skills, and
            expertise in the industry.
          </p>
          <button
            className={`mb-3 rounded-xl text-xs uppercase`}
            style={{ fontWeight: 300, color: primaryColor }}
          >
            View all &rarr;
          </button>
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
