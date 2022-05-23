import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import NotFound from "../Pages/NotFound/NotFound";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/login", Component: Login },
  { path: "/contact", Component: Contact },
  { path: "/register", Component: Register },
  { path: "*", Component: NotFound },
];
