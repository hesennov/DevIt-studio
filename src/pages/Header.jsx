import { headerColor } from "../constant/colors";
import headerImage from "../assets/headerImage.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-around md:flex-row">
      <div className={`pt-80 bg-${headerColor} w-1/2`}>
        <h1 className="text-5xl" style={{ fontWeight: 700 }}>
          What we do?
        </h1>
        <p className="pt-7 w-5/6 flex flex-right" style={{ fontWeight: 300 }}>
          Crafting exceptional web solutions that empower businesses to thrive
          in the digital world. Our team of highly skilled developers,
          designers, and strategists work collaboratively to deliver stunning
          online experiences that captivate your audience and drive tangible
          results. From concept to launch, we are your trusted partner in
          turning your vision into reality.
        </p>
      </div>
      <div className="md:pt-30 md:w-1/2">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
