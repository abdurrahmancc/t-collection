import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
  return (
    <div>
      <h4>please pay for {}</h4>
      <div class="hero min-h-fit mt-12 bg-base-200">
        <div class="hero-content flex-col lg:flex-col">
          <div class="text-center lg:text-left">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Hello, {}</h2>
                <p>Please Pay for {}</p>
                <p>
                  Your Appointment <span className="text-orange-700">{}</span>
                </p>
                <p>Please Pay ${}</p>
              </div>
            </div>
          </div>
          <div class="card max-h-52 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
