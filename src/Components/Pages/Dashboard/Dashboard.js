import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer min-h-screen drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-white bg-gradient-to-r from-[rgb(40,30,106)] via-[rgb(37,27,99)] to-[rgb(26,19,80)] flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 px-10 pt-10 text-white overflow-y-auto w-80 bg-[rgb(14,7,48)] ">
            {/* <!-- Sidebar content here --> */}

            <li className="rounded-lg">
              <NavLink to={"/dashboard/my-profile"} className="rounded-lg">
                My profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/my-payment"}>My Payment</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-payments"}>All Payments</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/add-service"}>Add Product</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-products"}>All Products</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-user"}>All User</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/all-admin"}>All admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
