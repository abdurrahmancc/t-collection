import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivet from "../Api/axiosPrivet";
import auth from "./Firebase";

const MyPayment = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const { data: orders } = useQuery("my-payments", () =>
    axiosPrivet.get(`get-order/${user?.email}`)
  );
  console.log(orders);
  return (
    <>
      <table className="border-collapse relative bg-[rgb(26,19,78)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   border-[rgb(51,41,129)] ">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={5}>Name</th>
            <th colSpan={3}>Price</th>
            <th colSpan={3}>Available</th>
            <th colSpan={3}>Image</th>
            <th colSpan={1} className={"pr-5"}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders?.data?.map((order, index) => {
              return (
                <>
                  <tr key={order._id} className="hover:bg-[rgb(42,31,114)]">
                    <td colSpan={1} className="pl-5 py-2 ">
                      {index + 1}
                    </td>
                    <td colSpan={5} className=" py-2 ">
                      {order?.name}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      {order?.price}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      {order?.available}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      <img className="w-10" src={order?.img} alt="" />
                    </td>
                    <td colSpan={1} className="text-right py-2">
                      <span className="w-4 mx-auto">
                        {/* <FaTrashAlt onClick={() => handleDelete(orders?._id)} /> */}
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default MyPayment;
