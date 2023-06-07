import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Main = () => {
  return (
    <HelmetProvider>
      <div className=" px-3 ">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
};

export default Main;
