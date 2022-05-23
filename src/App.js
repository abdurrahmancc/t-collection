import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Shared/Footer";
import Contact from "./Components/Pages/Contact/Contact";
import Register from "./Components/Pages/Login/Register";
import RequireAuth from "./Components/Hooks/RequireAuth";
import BuyNow from "./Components/Pages/Home/BuyNow/BuyNow";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/buyNow/:id"
            element={
              <RequireAuth>
                <BuyNow />
              </RequireAuth>
            }
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </div>
  );
}

export default App;
