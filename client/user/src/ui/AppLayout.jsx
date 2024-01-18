import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  // Config style for main app
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
