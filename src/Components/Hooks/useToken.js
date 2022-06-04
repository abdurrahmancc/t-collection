import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Fetcher from "../Api/Fetcher";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.email || user?.user?.email;
  const currentUser = { email: email, name: user?.displayName };
  // console.log("token", token, user);
  useEffect(() => {
    if (email) {
      fetch(`https://blooming-scrubland-82321.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("accessToken", data?.token);
          setToken(data?.token);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
