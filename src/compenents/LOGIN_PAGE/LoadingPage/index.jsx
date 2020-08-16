import React from "react";
import { useAppContext } from "../../../libs/contextLib.js";

const LoginLoadingPage = () => {
  const { placeData } = useAppContext();
  if (!placeData.length) {
    return <p>LOADING</p>;
  }
  if (placeData.length) {
    return <p>LOADED</p>;
  }
};

export default LoginLoadingPage;
