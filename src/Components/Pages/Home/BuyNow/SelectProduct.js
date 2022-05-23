import React, { useState } from "react";

const SelectProduct = ({ handleSubmitFrom, error, quantity, data }) => {
  const { available, description, price, img, name, minOrder, _id } = data;

  return (
    <div className="container mx-auto my-24">
      <div className="grid h-full md:grid-cols-2 lg:grid-cols-3  gap-5 items-center ">
        <div className="w-full flex justify-center  lg:justify-end">
          <img className="lg:w-[500px]" src={img} alt="" />
        </div>

        <div className="lg:col-span-2  flex justify-center">
          <div>
            <table class="max-w-lg border-separate border border-slate-400 ">
              <thead>
                <tr>
                  <th colSpan={"2"} class="border p-2 border-slate-300 ">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2 border-slate-300 ">Product Name</td>
                  <td class="border p-2 border-slate-300 ">{name}</td>
                </tr>
                <tr>
                  <td class="border p-2 border-slate-300 ">Price</td>
                  <td class="border p-2 border-slate-300 ">{price}</td>
                </tr>
                <tr>
                  <td class="border p-2 border-slate-300 ">Min-Order</td>
                  <td class="border p-2 border-slate-300 ">{minOrder}</td>
                </tr>
                <tr>
                  <td class="border p-2 border-slate-300 ">Quantity</td>
                  <td class="border p-2 border-slate-300 ">
                    {quantity ? quantity : "provide an positive quantity"}
                  </td>
                </tr>
                <tr>
                  <td class="border p-2 border-slate-300 ">Available</td>
                  <td class="border p-2 border-slate-300 ">{available}</td>
                </tr>
                <tr>
                  <td class="border p-2 border-slate-300 ">Description</td>
                  <td class="border p-2 border-slate-300 ">{description}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-12">
              <form onSubmit={handleSubmitFrom} className="">
                <div class="form-control">
                  <label class="input-group">
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Enter quantity amount ( Min-order 100 )"
                      class="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary">
                      submit
                    </button>
                  </label>
                  {error && <span className="label-text-alt text-red-500">{error}</span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
