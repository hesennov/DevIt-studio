import Container from "./components/lib/Container/container";
import NotFoundPage from "./components/lib/notFound/NotFoundPage";
import Header from "./pages/Header";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import Portofilo from "./pages/Portofilo";
import Testiominoial from "./pages/Testiominoial";
import Blog from "./pages/Blog";
import BlogPage from "./pages/blog/BlogPage";
import About from "./pages/about/About";
import DetailWiev from "./pages/blog/DetailWiev";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/layouts/header/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/123" element={<DetailWiev />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
