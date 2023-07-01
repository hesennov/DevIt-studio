import banner from "../assets/banner.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const SectionEnd = () => {
  return (
    <div className="relative">
      <Section>
        <img src={banner} alt="" />
        <button className="absolute top-1/2 md:top-2/4 lg:top-1/2 right-16 md:right-30 lg:right-60 transform -translate-y-1/2 translate-x-1/2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white rounded-xl text-sm md:text-base font-medium shadow-sm hover:shadow-lg text-gray-600 hover:text-indigo-700">
          Get in touch
        </button>
      </Section>
    </div>
  );
};

export default SectionEnd;
