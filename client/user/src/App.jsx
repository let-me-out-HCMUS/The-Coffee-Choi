import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import CartContextProvider from "./contexts/cartContext";
import { AuthContextProvider } from "./contexts/authContext";

import Auth from "./pages/Auth";
import ThirdPartyToken from "./pages/ThirdPartyToken";
import DashBoard from "./pages/DashBoard";
import Product from "./pages/Product";
import Payment from "./pages/Payment";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Coffeeholic from "./pages/Coffeeholic";
import Purchase from "./pages/Purchase";
import PageNotFound from "./pages/PageNotFound";

import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";


function App() {
  return (
  <>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<DashBoard />} />
              <Route path="/coffeeholic" element={<Coffeeholic />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/menu/:slug" element={<Menu />} />
              <Route path="/products/:slug" element={<Product />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/purchase" element={<Purchase />} />
            </Route>

          <Route path="/third-party" element={< ThirdPartyToken/>} />
          <Route path="/auth" element={<Auth />} />

            {/* All invalid route will render PageNotFound page */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>

    {/* Use for notification */}
    <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
  </>
  )
}

export default App
