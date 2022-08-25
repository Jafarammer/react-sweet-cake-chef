import { Outlet } from "react-router-dom";
// layouts
import Navabar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

const ShowLayout = () => {
  return (
    <>
      <Navabar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ShowLayout;
