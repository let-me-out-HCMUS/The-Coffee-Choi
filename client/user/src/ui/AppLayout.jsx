import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  // Config style for main app
  return (
    <div>
      <Navbar />
      <div className="mt-20 md:mt-20 lg:mt-16">
        <Outlet />
      </div>
      
    </div>
  );
}

export default AppLayout;
