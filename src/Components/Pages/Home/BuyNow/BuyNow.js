import React, { useState } from "react";
import Address from "./Address";
import SelectProduct from "./SelectProduct";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Fetcher from "../../../Api/Fetcher";
import Loading from "../../../Loading/Loading";
import toast from "react-hot-toast";

const BuyNow = () => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { id } = useParams();
  const { data, isLoading } = useQuery(["buyNow", id], () => Fetcher.get(`/buyNow/${id}`));
  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(data);
  const handleSubmitFrom = (e) => {
    e.preventDefault();
    const available = parseInt(data?.data?.available);
    const quantity = parseInt(e.target.quantity.value);
    console.log(available, quantity);

    if (quantity < 100) {
      setIsDisabled(true);
      toast.error("error");
      setError("minimum order 100");
      return;
    }
    if (available < quantity) {
      setIsDisabled(true);
      setError("not available");
      return;
    }
    if (quantity >= 100 && available > quantity) {
      setQuantity(quantity);
      setIsDisabled(false);
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
      <Address inputData={data.data} isDisabled={isDisabled} quantity={quantity} />
    </div>
  );
};

export default BuyNow;
