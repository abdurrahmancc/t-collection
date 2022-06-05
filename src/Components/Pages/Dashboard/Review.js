import { async } from "@firebase/util";
import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosPrivet from "../../Api/axiosPrivet";
import auth from "../../Hooks/Firebase";
import Loading from "../../Loading/Loading";
import { FaUpload } from "react-icons/fa";

const Review = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [inputImage, setInputImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [isRequire, setRequire] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (!inputImage) {
      setRequire(false);
      toast.error("attach your image", { id: "attach-img" });
      setIsLoading(false);
      return;
    }
    const imageStoreKey = "309363503ddfae2658a7350778e98cb0";
    const formData = new FormData();
    formData.append("image", inputImage);

    const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        if (result.success) {
          const image = result.data.url;
          const info = {
            name: data.name,
            profession: data.profession,
            userPhoto: image,
            description: data.description,
            rating: data.rating,
          };

          (async () => {
            const { data: result } = await axiosPrivet.post("/review", info);
            if (result.insertedId) {
              reset();
              toast.success("success", { id: "create-Success" });
            }
          })();
        }
      });
  };

  const handleImage = (e) => {
    setImageName(e.target.files[0].name);
    setInputImage(e.target.files[0]);
    setRequire(true);
  };

  console.log(inputImage);
  return (
    <>
      <div className=" items-center w-full ">
        <div className="w-full">
          <div className="hero w-full">
            <div className="card z-0 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <p className="text-2xl text-black text-center">Add Review</p>
                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input text-black input-bordered"
                      {...register("name", {
                        required: { value: true, message: "Name is require" },
                      })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Profession</span>
                    </label>
                    <input
                      type="text"
                      placeholder="profession"
                      className="input text-black input-bordered"
                      {...register("profession", {
                        required: { value: true, message: "profession is require" },
                      })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="text"
                      placeholder="inter tha positive values"
                      className="input text-black input-bordered"
                      {...register("rating", {
                        required: { value: true, message: "Image URL is require" },
                        pattern: {
                          value: /^[1-5]*$/,
                          message: "Provide your phone number",
                        },
                      })}
                    />
                    {errors.rating?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">{errors.rating?.message}</span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label pb-1">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      className="input text-black input-bordered"
                      {...register("description", {
                        required: { value: true, message: "Description is require" },
                      })}
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="inputImg" className="label pb-1">
                      <div
                        className={`flex justify-center py-6 flex-col gap-5 items-center w-full border-dashed border-2 ${
                          isRequire || "border-red-500"
                        }`}
                      >
                        <FaUpload className="text-gray-500 w-8 h-8 cursor-pointer" />{" "}
                        {imageName ? (
                          <span className="text-black">{imageName}</span>
                        ) : (
                          <span className="text-black">upload image</span>
                        )}
                      </div>
                    </label>
                    <input
                      type="file"
                      id="inputImg"
                      placeholder="Image URL"
                      className="input text-black hidden w-full h-full pl-0 input-bordered"
                      /* {...register("image", {
                        required: { value: true, message: "Image URL is require" },
                      })} */
                      onChange={handleImage}
                    />

                    {isLoading && <span className="text-black">Loading...</span>}
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
