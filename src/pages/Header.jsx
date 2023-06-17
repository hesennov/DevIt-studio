import { headerColor } from "../constant/colors";
import { primaryColor } from "../constant/colors";
import headerImage from "../assets/headerImage.png";

const Header = () => {
  return (
    <div className="flex flex-col md:justify-around md:flex-row lg:flex-row">
      <div className={`pt-20 md:pt-40 lg:pt-40 xl:pt-60 md:w-1/2`}>
        <h1
          className="text-5xl pt-20 sm:pt-4 md:pt-8 lg:pt-2 xl:pt-2 lg:z-1"
          style={{ fontWeight: 700, color: headerColor }}
        >
          What we do?
        </h1>
        <p
          className="pt-12 sm:pt-7 lg:pt-7 md:w-5/6 flex"
          style={{ fontWeight: 300 }}
        >
          Crafting exceptional web solutions that empower businesses to thrive
          in the digital world. Our team of highly skilled developers,
          designers, and strategists work collaboratively to deliver stunning
          online experiences that captivate your audience and drive tangible
          results. From concept to launch, we are your trusted partner in
          turning your vision into reality.
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <button
            className={`mt-3 px-8 py-3 rounded-xl text-white text-xs`}
            style={{ fontWeight: 300, background: primaryColor }}
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="pt-2 sm:pt-7 md:pt-60 lg:pt-30 xl:pt-25 w-full md:w-1/2">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
