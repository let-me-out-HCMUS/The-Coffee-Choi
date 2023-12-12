import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  // Config style for main app
  return (
    <div>
      <Navbar />
      <div className="mt-32 lg:mt-16">
        <Outlet />
      </div>
      
    </div>
  );
}

export default AppLayout;
