import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(watch("email"), watch("password"));
  return (
    <div className="grid grid-cols-1 min-h-screen items-center bg-base-200">
      <div className="w-full">
        <div class="hero  ">
          <div class="card z-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="card-body">
                <p className="text-2xl text-center">Log in to your account</p>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    {...register("email", {
                      required: { value: true, message: "Email is require" },
                      pattern: {
                        value:
                          /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors.email?.message}</span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                    {...register("password", {
                      required: { value: true, message: "Password is require" },
                      pattern: { value: /(?=.*?[A-Z])/, message: "Provide a valid password" },
                    })}
                  />
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                  )}
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <hr className="py-[0.5px] bg-gray-300" />
            <div className="py-6 text-center">
              <p className="text-lg ">
                New to T-collection?{" "}
                <Link to="/register" className="text-primary font-semibold underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-center btn btn-link text-lg text-primary font-semibold underline">
            Continue with Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
