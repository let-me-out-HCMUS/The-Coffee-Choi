import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import ProtectedRoute from "./ui/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthenticationContext";
import PageNotFound from "./pages/PageNotFound";
import { ThemeContextProvider } from "./context/ThemeContext";
import Category from "./pages/Category";
import DetailCategory from "./pages/DetailCategory";
import Order from "./pages/Order";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="category" element={<Category />} />
                <Route path="category/:slug" element={<DetailCategory />} />
                <Route path="order" element={<Order />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

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
              },
            }}
          />
        </QueryClientProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
