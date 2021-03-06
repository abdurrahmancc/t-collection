import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Hooks/Firebase";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axiosPrivet from "../../../Api/axiosPrivet";
import toast from "react-hot-toast";
import Loading from "../../../Loading/Loading";
import { Navigate, useNavigate } from "react-router-dom";

const Address = ({ quantity, inputData, isDisabled, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const [inputError, setInputError] = useState("");
  const navigate = useNavigate();
  const { price, available, email, img, minOrder, name, _id } = inputData;

  // console.log(inputData);

  let setQuantity;
  let subTotal;

  if (!quantity) {
    setQuantity = minOrder;
    subTotal = parseInt(inputData?.price) * parseInt(minOrder);
  }
  if (quantity) {
    setQuantity = quantity;
    subTotal = parseInt(inputData?.price) * parseInt(quantity);
  }

  // console.log(setQuantity, subTotal);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />;
  }
  // console.log(user);
  const onSubmit = async (info) => {
    const orderInfo = {
      price,
      email: user.email,
      img,
      productName: name,
      productId: _id,
      userName: user?.displayName,
      quantity: setQuantity,
      totalPrice: subTotal,
      address: info.address,
      shippingAddress: info?.Shipping,
      phoneNumber: info?.phone,
    };
    const { data: order } = await axiosPrivet.post("/order", orderInfo);
    if (order?.insertedId) {
      toast.success("order success & please proceed to pay", { id: "order-success" });
      const info = parseInt(available) - setQuantity;
      const { data: update } = await axiosPrivet.patch(`/update-available/${_id}`, {
        available: info,
      });
      refetch();
    }
  };

  const address = getValues("address");
  const shippingAddress = getValues("Shipping");
  const phoneNumber = getValues("phone");

  const handleNavigate = () => {
    navigate(`/dashboard/my-order`);
  };

  // console.log(shippingAddress);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full justify-items-center grid lg:grid-cols-2 grid-cols-1 ">
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body w-full">
                <h4 className="text-3xl mb-6 font-bold text-center">Your Address</h4>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={user?.displayName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    value={user?.email}
                    placeholder="Email address"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Your Address"
                    className="input input-bordered"
                    {...register("address", {
                      required: { value: true, message: "Name is require" },
                    })}
                  />
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.address?.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Shipping Address"
                    className="input input-bordered"
                    {...register("Shipping", {
                      required: { value: true, message: "Shipping Address is require" },
                    })}
                  />
                  {errors.Shipping?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.Shipping?.message}</span>
                  )}
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    className="input input-bordered"
                    {...register("phone", {
                      required: { value: true, message: "phone number is require" },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Provide your phone number",
                      },
                    })}
                  />
                  {errors.phone?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors.phone?.message}</span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={isDisabled}
                    type="submit"
                    className="btn btn-primary disabled:text-[#ffffff8a] disabled:bg-[#545f5f]"
                  >
                    Order
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* order and proceed to pay */}
          <>
            <div className="flex justify-center">
              <div>
                <table className="max-w-lg lg:w-[500px] border-separate border border-slate-400 ">
                  <thead>
                    <tr>
                      <th colSpan={"2"} className="border p-2 border-slate-300 ">
                        Order Details
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Name</td>
                      <td className="border p-2 border-slate-300 ">{user?.displayName}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Email</td>
                      <td className="border p-2 border-slate-300 ">{user?.email}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Address</td>
                      <td className="border p-2 border-slate-300 ">{address}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Shipping Address</td>
                      <td className="border p-2 border-slate-300 ">{shippingAddress}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Phone Number</td>
                      <td className="border p-2 border-slate-300 ">{phoneNumber}</td>
                    </tr>
                    <tr>
                      <th colSpan={"2"} className="border p-2 border-slate-300 ">
                        Order Summary
                      </th>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Quantity</td>
                      <td className="border p-2 border-slate-300 font-bold">
                        {" "}
                        {setQuantity} <span className="text-slate-400 font-normal">/pcs</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Total</td>
                      <td className="border p-2 border-slate-300 font-bold"> $ {subTotal}</td>
                    </tr>
                    <tr>
                      <th colSpan={"2"} className="border p-2 border-slate-300 ">
                        <button
                          onClick={() => handleNavigate()}
                          disabled={isDisabled || !shippingAddress}
                          className="btn w-full disabled:text-[#ffffff8a] disabled:bg-[#545f5f] btn-primary"
                        >
                          {" "}
                          Proceed to Pay
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Address;
