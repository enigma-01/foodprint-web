import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import {  AppContext ,useAppContext } from "../../libs/contextLib.js";
import App from "../App/index.jsx";

const SpendingChart = () => {
  const { user, placeData, loadAllPlaceData } = useAppContext();

  return (
    <div>
            {placeData.length ? 
            <>
                <p>graph present!</p>
            </> 
            : 
            <> <p>GRAPH LOADING</p> </>} 
        </div>
  );
};

export default SpendingChart;
