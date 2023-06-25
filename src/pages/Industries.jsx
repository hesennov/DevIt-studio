import design from "../assets/design.png";
import development from "../assets/development.png";
import cms from "../assets/cms.png";

const Industries = () => {
  return (
    <section
      id="Industries-section"
      className="md:flex gap-2 md:justify-center md:pt-20 lg:pt-0"
    >
      <div className="flex flex-row">
        <img src={design} alt="design" className="w-10 h-10 sm:w-12 sm:h-12" />
        <div className="flex flex-col pl-4">
          <h3 className="text-lg font-normal">Design</h3>
          <p className="text-sm pt-2 pb-5 font-light">
            Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
            id et viverra augue.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          src={development}
          alt="development"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="flex flex-col pl-4">
          <h3 className="text-lg">Development</h3>
          <p className="text-sm pt-2 pb-5" style={{ fontWeight: 300 }}>
            Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
            id et viverra augue.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={cms} alt="cms" style={{ width: "40px", height: "40px" }} />
        <div className="flex flex-col pl-4">
          <h3 className="text-lg font-normal">CMS</h3>
          <p className="text-sm pt-2 pb-0 font-light">
            Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
            id et viverra augue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
