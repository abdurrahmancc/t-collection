import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyPortfolio from "../Pages/MyPortfolio/MyPortfolio";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Products/Products";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/products", Component: Products },
  { path: "/login", Component: Login },
  { path: "/contact", Component: Contact },
  { path: "/register", Component: Register },
  { path: "/portfolio", Component: MyPortfolio },
  { path: "/blog", Component: Blog },
  { path: "*", Component: NotFound },
];
