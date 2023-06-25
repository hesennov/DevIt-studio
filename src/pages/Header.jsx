import { headerColor } from "../constant/colors";
import { primaryColor } from "../constant/colors";
import headerImage from "../assets/juicy-girl-and-guy-preparing-start-up-rocket-to-launch-with-ideas.gif";

const Header = () => {
  return (
    <div className="flex flex-col md:justify-around md:flex-row lg:flex-row">
      <div className="pt-6 md:pt-20 lg:pt-40 xl:pt-40 md:w-1/2">
        <h1
          className="text-5xl pt-2 md:pt-2 lg:pt-2 xl:pt-2 lg:z-1 text-center md:text-left lg:text-left font-bold"
          style={{ color: headerColor }}
        >
          What we do?
        </h1>
        <p className="pt-7 sm:pt-7 lg:pt-7 md:w-5/6 flex text-center md:text-left lg:text-left font-light">
          Crafting exceptional web solutions that empower businesses to thrive
          in the digital world. Our team of highly skilled developers,
          designers, and strategists work collaboratively to deliver stunning
          online experiences that captivate your audience and drive tangible
          results. From concept to launch, we are your trusted partner in
          turning your vision into reality.
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <button
            className={`mt-3 px-8 py-3 rounded-xl text-white text-xs font-light`}
            style={{ background: primaryColor }}
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="pt-2 sm:pt-7 md:pt-40 lg:pt-20 xl:pt-8 md:w-1/2 md:pl-10">
        <img src={headerImage} alt="" style={{ width: "480px" }} />
      </div>
    </div>
  );
};

export default Header;
