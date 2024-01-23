import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import CartContextProvider from "./contexts/cartContext";

import DashBoard from "./pages/DashBoard";
import Product from "./pages/Product";
import Payment from "./pages/Payment";

import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
  <>
    <BrowserRouter>
      <CartContextProvider>
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
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/payment" element={<Payment />} />
            {/* Another route add from here */}
        </Route>

          {/* All invalid route will render PageNotFound page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CartContextProvider>
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
