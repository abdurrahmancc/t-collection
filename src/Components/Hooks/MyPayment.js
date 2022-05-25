import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { FaTrashAlt } from "react-icons/fa";
import axiosPrivet from "../Api/axiosPrivet";
import auth from "./Firebase";
import Fetcher from "../Api/Fetcher";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyPayment = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  const { data: orders, refetch } = useQuery("my-payments", () =>
    axiosPrivet.get(`get-order/${user?.email}`)
  );

  //delete product
  const handleDelete = async (id) => {
    const confirm = window.confirm();
    if (confirm) {
      const { data } = await Fetcher.delete(`/order-delete/${id}`);
      if (data?.acknowledged) {
        toast.success("Deleted", { id: "delete-product" });
        refetch();
      }
    }
  };
  return (
    <>
      <table className="border-collapse relative bg-[rgb(26,19,78)] table-fixed  w-5/6  ">
        <thead>
          <tr className="border text-left   border-[rgb(51,41,129)] ">
            <th colSpan={1} className="pl-5 py-3">
              #
            </th>
            <th colSpan={3}>Product Name</th>
            <th colSpan={2}>Quantity</th>
            <th colSpan={2}>Price</th>
            <th colSpan={2}>Total Price</th>
            <th colSpan={3} className="text-center">
              Image
            </th>
            <th colSpan={2}>Pay</th>
            <th colSpan={2} className={"pr-5 text-center"}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders?.data?.map((order, index) => {
              return (
                <>
                  <tr key={order._id} className=" hover:bg-[rgb(42,31,114)]">
                    <td colSpan={1} className="pl-5 py-2 ">
                      {index + 1}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      {order?.productName}
                    </td>
                    <td colSpan={2} className=" py-2 ">
                      {order?.quantity}
                    </td>
                    <td colSpan={2} className=" py-2 ">
                      {order?.price}
                    </td>
                    <td colSpan={2} className=" py-2 ">
                      {order?.totalPrice}
                    </td>
                    <td colSpan={3} className=" py-2 ">
                      <div className="flex justify-center">
                        <img className="w-10 " src={order?.img} alt="" />
                      </div>
                    </td>

                    <td colSpan={2} className=" py-2 ">
                      {order?.paid ? (
                        <span className="text-success font-bold">paid</span>
                      ) : (
                        <Link
                          to={`/dashboard/payment/${order._id}`}
                          className="btn btn-sm btn-success "
                        >
                          pay
                        </Link>
                      )}
                    </td>
                    <td colSpan={2} className=" py-2">
                      <span className="flex justify-center ">
                        <FaTrashAlt onClick={() => handleDelete(order?._id)} />
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
