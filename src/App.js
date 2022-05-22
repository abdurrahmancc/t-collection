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

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Toaster />
      </Navbar>
    </div>
  );
}

export default App;
