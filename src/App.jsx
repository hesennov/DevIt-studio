import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/lib/notFound/NotFoundPage";
import BlogPage from "./pages/blog/BlogPage";
import About from "./pages/about/About";
import DetailView from "./pages/blog/DetailView";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/layouts/header/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Layout from "./Layout";
import ProjectPage from "./pages/portfolio/ProjectPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/123" element={<DetailView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
