import design from "../assets/design.png";
import development from "../assets/development.png";
import cms from "../assets/cms.png";

const Industries = () => {
  return (
    <section id="Industries-section" className="flex justify-center py-10">
      <div className="flex flex-row">
        <img
          src={design}
          alt="design"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="flex flex-col pl-4">
          <h3 className="text-lg" style={{ fontWeight: 400 }}>
            Design
          </h3>
          <p className="text-sm pt-2" style={{ fontWeight: 300 }}>
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
          <h3 className="text-lg">Custom Development</h3>
          <p className="text-sm pt-2" style={{ fontWeight: 300 }}>
            Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
            id et viverra augue.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={cms} alt="cms" style={{ width: "40px", height: "40px" }} />
        <div className="flex flex-col pl-4">
          <h3 className="text-lg" style={{ fontWeight: 400 }}>
            Content Management System
          </h3>
          <p className="text-sm pt-2" style={{ fontWeight: 300 }}>
            Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus
            id et viverra augue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
