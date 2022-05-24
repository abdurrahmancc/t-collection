import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Hooks/Firebase";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Address = ({ quantity, data }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (info) => {
    console.log(info);
    // reset();
  };

  const address = getValues("address");
  const shippingAddress = getValues("Shipping");
  const phoneNumber = getValues("phone");
  console.log(phoneNumber);
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
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <>
            <div className="flex justify-center">
              <div>
                <table className="max-w-lg lg:w-[500px] border-separate border border-slate-400 ">
                  <thead>
                    <tr>
                      <th colSpan={"2"} className="border p-2 border-slate-300 ">
                        Details
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
                      <td className="border p-2 border-slate-300 font-bold">$ {quantity}</td>
                    </tr>
                    <tr>
                      <td className="border p-2 border-slate-300 ">Total</td>
                      <td className="border p-2 border-slate-300 font-bold">
                        {" "}
                        $ {data?.price * quantity}
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={"2"} className="border p-2 border-slate-300 ">
                        <button className="btn w-full btn-primary">Proceed to Pay</button>
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
