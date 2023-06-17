import Container from "./components/lib/Container/container";
import Layout from "./components/layouts/layout";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portofilo from "./pages/Portofilo";
import TestimonIals from "./pages/TestimonIals";
import Blog from "./pages/Blog";
import ellipseImage from "./assets/ellipse3.png";

const App = () => {
  return (
    <>
      <div
        style={{
          position: "relative", // Add relative positioning to the container
          paddingBottom: "60px", // Adjust the padding bottom as needed
          backgroundImage: `url(${ellipseImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "45%",
        }}
      >
        <Layout title={"Home"}>
          <section>
            <Header />
          </section>
          <section className={"mt-20"}>
            <Industries />
          </section>
          <section className={"mt-20"}>
            <AboutUs />
          </section>
          <section className={"mt-20"}>
            <Portofilo />
          </section>
          <section className={"mt-20"}>
            <TestimonIals />
          </section>
          <section className={"mt-20"}>
            <Blog />
          </section>
        </Layout>
      </div>
    </>
  );
};
export default App;
