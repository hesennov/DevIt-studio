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
        className="relative pb-0 bg-cover bg-left-bottom bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url(${ellipseImage1})`,
          backgroundSize: "45%",
        }}
      >
        <div
          className="absolute bg-contain w-full h-full bg-no-repeat bg-left-top sm:w-1/2 sm:h-1/2 z-[-1]"
          style={{
            backgroundImage: `url(${ellipseImage2})`,
          }}
        ></div>
        <Layout title={"Home"}>
          <Container className="my-container">
            <section>
              <Header />
            </section>
            <section className="mt-20">
              <Industries />
            </section>
            <section className="mt-20">
              <AboutUs />
            </section>
            <section className="mt-20">
              <Portofilo />
            </section>
            <section className="mt-20">
              <Testiominoial />
            </section>
            <section className="mt-20">
              <Blog />
            </section>
          </Container>
        </Layout>
      </div>
    </>
  );
};

export default App;
