import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import SectionEnd from "./pages/SectionEnd";
import Container from "./components/lib/container/Container";

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
        <Portfolio />
      </section>
      <section className="mt-20">
        <Testimonial />
      </section>
      <section className="mt-20">
        <SectionEnd />
      </section>
    </Container>
  );
};

export default Layout;
