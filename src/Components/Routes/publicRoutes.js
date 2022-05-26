import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ClientReviews from "../Pages/Dashboard/ClientReviews";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyPortfolio from "../Pages/MyPortfolio/MyPortfolio";
import NotFound from "../Pages/NotFound/NotFound";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/login", Component: Login },
  { path: "/contact", Component: Contact },
  { path: "/register", Component: Register },
  { path: "/portfolio", Component: MyPortfolio },
  { path: "/blog", Component: Blog },
  { path: "*", Component: NotFound },
];
