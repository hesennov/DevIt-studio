import { headerColor } from "../constant/colors";

const ProjectPortfolio = () => {
  return (
    <div className="flex md:flex-row">
      <div className="title-container">
        <h1
          className="text-5xl pt-2 md:pt-2 lg:pt-2 xl:pt-2 lg:z-1 pr-48"
          style={{ fontWeight: 700, color: headerColor }}
        >
          Project Portfolio
        </h1>
      </div>
      <div className="text-container w-1/2 text-right">
        <p className="pt-4 sm:pt-4 lg:pt-4 pb-4" style={{ fontWeight: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
          posuere porta vitae mi accumsan. Ultricies mauris, hab.
        </p>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
