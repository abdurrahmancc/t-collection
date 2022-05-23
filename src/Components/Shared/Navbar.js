import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../Assets/logo.png";
import auth from "../Hooks/Firebase";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [darkToggle, setDarkToggle] = useState(false);
  const navItems = (
    <>
      <li className=" py-2">
        <NavLink to={"/home"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          HOME
        </NavLink>
      </li>
      <li className=" py-2">
        <NavLink to={"/about"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          ABOUT
        </NavLink>
      </li>
      <li className=" py-2">
        <NavLink to={"/contact"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          CONTACT
        </NavLink>
      </li>
      <li className=" py-2">
        <NavLink to={"/dashboard"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
          DASHBOARD
        </NavLink>
      </li>
      <li className=" py-2">
        {user ? (
          <span
            onClick={() => signOut(auth)}
            className="rounded-lg hover:text-orange-400 font-bold btn-sm"
          >
            LOG OUT
          </span>
        ) : (
          <NavLink to={"/login"} className="rounded-lg hover:text-orange-400 font-bold btn-sm">
            LOGIN
          </NavLink>
        )}
      </li>
      <div class="dropdown  dropdown-end flex items-center ">
        <label tabindex="0" class="btn btn-ghost  btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        {/*         <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul> */}
      </div>
      <label class="swap swap-rotate">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input onClick={() => setDarkToggle(!darkToggle)} type="checkbox" />

        {/* <!-- sun icon --> */}
        <svg
          class="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* <!-- moon icon --> */}
        <svg
          class="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );

  return (
    <div>
      <div class="drawer drawer-end" data-theme={darkToggle ? "dark" : "light"}>
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          {/* <!-- Navbar --> */}
          <div class="w-full text-white navbar bg-[#120E43]">
            <div className="container mx-auto">
              <div class="flex-1  px-2 mx-2">
                {/* <Link to={"/"}>
                  <img className="w-3/12" src={logo} alt="" />
                </Link> */}
                <Link to={"/"}>
                  <strong className="text-5xl  text-[#FFC000]">T</strong>
                  <strong className="text-3xl  text-white">- COLLECTION</strong>
                </Link>
              </div>
              <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal gap-3">
                  {/* <!-- Navbar menu content here --> */}

                  {navItems}
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
