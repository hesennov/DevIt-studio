import { headerColor } from "../constant/colors";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project3.webp";
import project3 from "../assets/project4.webp";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const ProjectPortfolio = () => {
  return (
    <div>
      <div className="title-container flex flex-col lg:flex-row">
        <Section>
          <motion.h1
            className="sm:whitespace-wrap md:whitespace-wrap lg:whitespace-nowrap text-5xl pt-2 md:pt-2 lg:pt-2 text-center md:text-center lg:text-left md:pr-0 lg:pr-16 font-bold"
            style={{ color: headerColor }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Portfolio
          </motion.h1>
        </Section>
        <div className="text-container lg:w-1/3 mx-auto text-center md:text-center lg:text-left">
          <motion.p
            className="pt-4 sm:pt-4 lg:pt-4 pb-4 text-center lg:text-left font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our project portfolio shows our accomplishments, skills, and
            expertise in the industry.
          </motion.p>
          <Link to="/portfolio">
            <motion.button
              className="mb-10 rounded-xl text-xs uppercase font-light text-indigo-400 hover:text-indigo-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              View all &rarr;
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="projects grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        <motion.img
          src={project1}
          className="max-w-full"
          alt="Project1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} // Increased duration to 1 second
        />
        <motion.img
          src={project2}
          className="max-w-full"
          alt="Project3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} // Increased duration to 1 second
        />
        <motion.img
          src={project3}
          className="max-w-full"
          alt="Project4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} // Increased duration to 1 second
        />
      </div>
    </div>
  );
};

export default ProjectPortfolio;
