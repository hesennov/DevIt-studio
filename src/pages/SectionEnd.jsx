import banner from "../assets/banner.png";

const SectionEnd = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" />
      <button className="absolute top-1/2 md:top-2/4 lg:top-1/2 right-16 md:right-30 lg:right-60 transform -translate-y-1/2 translate-x-1/2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white rounded-md text-sm md:text-base font-medium shadow-sm hover:shadow-lg text-gray-600 hover:text-indigo-700">
        Get in touch
      </button>
    </div>
  );
};

export default SectionEnd;
