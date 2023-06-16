import Container from "./components/lib/Container/container";
import Layout from "./components/layouts/layout";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portofilo from "./pages/Portofilo";
import TestimonIals from "./pages/TestimonIals";
import Blog from "./pages/Blog";
const App = () => {
  return (
    <>
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
    </>
  );
};
export default App;
