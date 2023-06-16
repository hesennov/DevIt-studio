import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, ...props }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | Create devIt App`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <section className={"fixed top-0 w-full z-40"}>
        <Navbar />
      </section>
      <div {...props}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
