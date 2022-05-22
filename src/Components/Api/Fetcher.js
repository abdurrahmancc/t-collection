import axios from "axios";
import React from "react";

const Fetcher = axios.create({ baseURL: "http://localhost:5000" });

export default Fetcher;
