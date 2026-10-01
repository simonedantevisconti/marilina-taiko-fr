import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const DefaultLayout = () => {
  return (
    <>
      <ScrollReveal />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
