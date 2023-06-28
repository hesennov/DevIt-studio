import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portofilo from "./pages/Portofilo";
import Testiominoial from "./pages/Testiominoial";
import Blog from "./pages/Blog";
import SectionEnd from "./pages/SectionEnd";

const Layout = () => {
  return (
    <Container className="my-container">
      <section>
        <Header />
      </section>
      <section className="mt-10">
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
      <section className="mt-20">
        <SectionEnd />
      </section>
    </Container>
  );
};

export default Layout;
