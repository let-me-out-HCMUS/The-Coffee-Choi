import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  // Config style for main app
  return (
    <div>
      <Navbar />
      <div className="mt-20 md:mt-20 lg:mt-16 max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
