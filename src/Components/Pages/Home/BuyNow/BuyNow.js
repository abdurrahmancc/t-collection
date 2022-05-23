import React, { useState } from "react";
import Address from "./Address";
import SelectProduct from "./SelectProduct";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Fetcher from "../../../Api/Fetcher";
import Loading from "../../../Loading/Loading";

const BuyNow = () => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState("");

  const { id } = useParams();
  const { data, isLoading } = useQuery(["buyNow", id], () => Fetcher.get(`/buyNow/${id}`));
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    console.log(e.target.quantity.value);
    if (e.target.quantity.value < 100) {
      return setError("minimum order 100");
    }
    if (e.target.quantity.value >= 100) {
      setQuantity(e.target.quantity.value);
      setError(" ");
      e.target.reset();
    } else {
      setError("please provide an positive quantity amount");
    }
  };
  return (
    <div>
      <SelectProduct
        error={error}
        data={data?.data}
        quantity={quantity}
        handleSubmitFrom={handleSubmitFrom}
      />
      <Address data={data.data} quantity={quantity} />
    </div>
  );
};

export default BuyNow;
