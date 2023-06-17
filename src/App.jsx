import Container from "./components/lib/Container/container";
import Layout from "./components/layouts/layout";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portofilo from "./pages/Portofilo";
import Testiominoial from "./pages/Testiominoial";
import Blog from "./pages/Blog";
import ellipseImage1 from "./assets/ellipse1.png";
import ellipseImage2 from "./assets/ellipse2.png";

const App = () => {
  return (
    <>
      <div
        style={{
          position: "relative", // Add relative positioning to the container
          paddingBottom: "60px", // Adjust the padding bottom as needed
          backgroundImage: `url(${ellipseImage1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
          backgroundSize: "45%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${ellipseImage2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
            backgroundSize: "40%",
          }}
        ></div>
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
            <Testiominoial />
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
