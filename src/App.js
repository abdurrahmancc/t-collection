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
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </div>
  );
}

export default App;
