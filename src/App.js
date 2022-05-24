import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Shared/Footer";
import RequireAuth from "./Components/Hooks/RequireAuth";
import BuyNow from "./Components/Pages/Home/BuyNow/BuyNow";
import { publicRoutes } from "./Components/Routes/publicRoutes";
import { privetRoutes } from "./Components/Routes/PrivetRoutes";
import IsAdmin from "./Components/Hooks/IsAdmin";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import AllUser from "./Components/Pages/Dashboard/AllUser";
import Admin from "./Components/Pages/Dashboard/Admin";
import MyPayment from "./Components/Hooks/MyPayment";
import MyProfile from "./Components/Hooks/MyProfile";
import AllPayments from "./Components/Pages/Dashboard/AllPayments";
import AllProducts from "./Components/Pages/Dashboard/AllProducts";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            {privetRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<MyPayment />} />
              <Route path="add-service" element={<AddProduct />} />
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="all-user" element={<AllUser />} />
              <Route path="my-payment" element={<MyPayment />} />
              <Route element={<IsAdmin />}>
                <Route path="all-admin" element={<Admin />} />
                <Route path="all-payments" element={<AllPayments />} />
                <Route path="all-products" element={<AllProducts />} />
              </Route>
            </Route>
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </div>
  );
}

export default App;
