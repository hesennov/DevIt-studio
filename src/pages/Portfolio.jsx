import { headerColor } from "../constant/colors";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="title-container flex flex-col lg:flex-row">
        <Section>
          <h1
            className="sm:whitespace-wrap md:whitespace-wrap lg:whitespace-nowrap text-5xl pt-2 md:pt-2 lg:pt-2 text-center md:text-center lg:text-left md:pr-0 lg:pr-16 font-bold"
            style={{ color: headerColor }}
          >
            Project Portfolio
          </h1>
        </Section>
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
      <Slider {...settings}>
        <div>
          <img src={project1} />
        </div>
        <div>
          <img src={project2} />
        </div>
        <div>
          <img src={project3} />
        </div>
        <div>
          <img src={project4} />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectPortfolio;
