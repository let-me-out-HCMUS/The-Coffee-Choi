import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";

import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* Some route page that just use for admin */}
            </Route>

          <Route element={<AppLayout />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="/menu" element={<Menu />} />
              {/* Another route add from here */}
          </Route>

            {/* All invalid route will render PageNotFound page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
