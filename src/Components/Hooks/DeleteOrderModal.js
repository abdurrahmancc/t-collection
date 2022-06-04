import React from "react";

const DeleteOrderModal = ({ handleDelete, order }) => {
  return (
    <>
      <input type="checkbox" id="delete-Order-Modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box  bg-[#120E43]">
          <h3 class="font-bold text-lg text-center my-10">
            Are you sure want to delete {order?.productName}
          </h3>
          <div>
            <img className="w-6/12 mx-auto" src={order?.img} alt="" />
          </div>
          <div class="flex justify-around mt-10 ">
            <label for="delete-Order-Modal" class="btn  ">
              Cancel
            </label>
            <label onClick={() => handleDelete(order._id)} for="delete-Order-Modal" class="btn">
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteOrderModal;
