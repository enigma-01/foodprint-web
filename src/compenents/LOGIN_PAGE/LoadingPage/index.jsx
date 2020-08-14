import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../../libs/contextLib.js";
import { Redirect } from "react-router-dom";

const LoginLoadingPage = () => {
  const { user, placeData } = useAppContext();
  if (!placeData.length) {
    return <p>LOADING</p>;
  }
  if (placeData.length) {
    return <p>LOADED</p>;
  }
};

export default LoginLoadingPage;
