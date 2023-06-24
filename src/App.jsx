import Container from "./components/lib/Container/container";
import NotFoundPage from "./components/lib/notFound/NotFoundPage";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
<<<<<<< HEAD
// import Portofilo from "./pages/Portofilo";
import Testimonials from "./pages/Testimonials";
=======
import Portofilo from "./pages/Portofilo";
>>>>>>> 9a23df220d501c47792b7031eb9e3d08e4c431eb
import Testiominoial from "./pages/Testiominoial";
import Blog from "./pages/Blog";
import BlogPage from "./pages/blog/BlogPage";
import DetailWiev from "./pages/blog/DetailWiev";
import Navbar from "./components/layouts/header/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Navigation />
      <Layout title={"Home"}>
        <section className={"mt-24"}>
          <Header />
        </section>
        <section className={"mt-20"}>
          <Industries />
        </section>
        <section className={"mt-20"}>
          <AboutUs />
        </section>
        <section className={"mt-20"}>
          {/* <Portofilo /> */}
        </section>
        <section className={"mt-20"}>
          <Testiominoial />
        </section>
        <section className={"mt-20"}>
          <Blog />
        </section>
      </Layout>
=======
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/123" element={<DetailWiev />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
>>>>>>> 9a23df220d501c47792b7031eb9e3d08e4c431eb
    </>
  );
};

export default App;
