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
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content w-full justify-items-center grid lg:grid-cols-2 grid-cols-1 ">
          <div class="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="card-body w-full">
                <h4 className="text-3xl mb-6 font-bold text-center">Your Address</h4>
                <div class="form-control">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={user?.displayName}
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    value={user?.email}
                    placeholder="Email address"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Your Address"
                    class="input input-bordered"
                    {...register("address", {
                      required: { value: true, message: "Name is require" },
                    })}
                  />
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.address?.message}</span>
                  )}
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Shipping Address"
                    class="input input-bordered"
                    {...register("Shipping", {
                      required: { value: true, message: "Shipping Address is require" },
                    })}
                  />
                  {errors.Shipping?.type === "required" && (
                    <span className="label-text-alt text-red-500">{errors.Shipping?.message}</span>
                  )}
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    class="input input-bordered"
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
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <>
            <div className="flex justify-center">
              <div>
                <table class="max-w-lg lg:w-[500px] border-separate border border-slate-400 ">
                  <thead>
                    <tr>
                      <th colSpan={"2"} class="border p-2 border-slate-300 ">
                        Details
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Name</td>
                      <td class="border p-2 border-slate-300 ">{user?.displayName}</td>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Email</td>
                      <td class="border p-2 border-slate-300 ">{user?.email}</td>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Address</td>
                      <td class="border p-2 border-slate-300 ">{address}</td>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Shipping Address</td>
                      <td class="border p-2 border-slate-300 ">{shippingAddress}</td>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Phone Number</td>
                      <td class="border p-2 border-slate-300 ">{phoneNumber}</td>
                    </tr>
                    <tr>
                      <th colSpan={"2"} class="border p-2 border-slate-300 ">
                        Order Summary
                      </th>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Quantity</td>
                      <td class="border p-2 border-slate-300 font-bold">$ {quantity}</td>
                    </tr>
                    <tr>
                      <td class="border p-2 border-slate-300 ">Total</td>
                      <td class="border p-2 border-slate-300 font-bold">
                        {" "}
                        $ {data?.price * quantity}
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={"2"} class="border p-2 border-slate-300 ">
                        <button class="btn w-full btn-primary">Proceed to Pay</button>
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
