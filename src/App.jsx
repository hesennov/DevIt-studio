import Container from "./components/lib/Container/container";
import Layout from "./components/layouts/layout";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import Abouts from "./pages/Abouts";
import Portofilo from "./pages/Portofilo";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
const App = () => {
  return (
    <>
      <Layout title={"Home"}>
        <section className={"mt-24"}>
          <Header />
        </section>
        <section className={"mt-20"}>
          <Industries />
        </section>
        <section className={"mt-20"}>
          <Abouts />
        </section>
        <section className={"mt-20"}>
          <Portofilo />
        </section>
        <section className={"mt-20"}>
          <Testimonials />
        </section>
        <section className={"mt-20"}>
          <Blog />
        </section>
      </Layout>
    </>
  );
};
export default App;
