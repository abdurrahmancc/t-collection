import React, { useState } from "react";
import { useQuery } from "react-query";
import Fetcher from "../../Api/Fetcher";
import { FaTrashAlt } from "react-icons/fa";
import { async } from "@firebase/util";
import toast from "react-hot-toast";
import axiosPrivet from "../../Api/axiosPrivet";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const AllProducts = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);

  const { data: products, refetch } = useQuery("all-products", () =>
    axiosPrivet.get("/all-products")
  );

  //delete product
  const handleDelete = async (id) => {
    const { data } = await Fetcher.delete(`/product-delete/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (data?.acknowledged) {
      toast.success("Deleted", { id: "delete-product" });
      refetch();
    }
  };

  //   console.log(products);
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
          {products?.data?.map((product, index) => {
            return (
              <>
                <tr key={product._id} className="hover:bg-[rgb(42,31,114)]">
                  <td colSpan={1} className="pl-5 py-2 ">
                    {index + 1}
                  </td>
                  <td colSpan={5} className=" py-2 ">
                    {product?.name}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {product?.price}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    {product?.available}
                  </td>
                  <td colSpan={3} className=" py-2 ">
                    <img className="w-10" src={product?.img} alt="" />
                  </td>
                  <td colSpan={1} className="text-right py-2">
                    <label htmlFor="confirm-Delete-Modal" className=" w-4 mx-auto">
                      <FaTrashAlt onClick={() => setConfirmDelete(product)} />
                    </label>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {confirmDelete && (
        <ConfirmDeleteModal handleDelete={handleDelete} product={confirmDelete}>
          {" "}
        </ConfirmDeleteModal>
      )}
    </>
  );
};

export default AllProducts;
