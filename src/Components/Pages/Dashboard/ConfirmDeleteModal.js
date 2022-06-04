import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ConfirmDeleteModal = ({ product, handleDelete }) => {
  return (
    <>
      <input type="checkbox" id="confirm-Delete-Modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#120E43] ">
          <h3 className="font-bold text-center text-xl mt-10">
            Are you sure want to delete {product?.name} ?
          </h3>
          <p className="text-center mb-10">Email: {product?.email}</p>
          <div>
            <img className="w-6/12 mx-auto" src={product?.img} alt="" />
          </div>
          <div className="flex justify-around mt-10">
            <label htmlFor="confirm-Delete-Modal" className="btn  ">
              Cancel
            </label>
            <label
              onClick={() => handleDelete(product?._id)}
              htmlFor="confirm-Delete-Modal"
              className="btn"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
