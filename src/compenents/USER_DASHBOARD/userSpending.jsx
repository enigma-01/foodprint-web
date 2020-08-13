import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useAppContext } from "../../libs/contextLib.js";

const SpendingChart = () => {
  const {user} = useAppContext();
  const labelTitles = [];
  const price = [];

  const [placeData, updatePlaceData] = useState([]);

  useEffect(() => {
    updatePlaceData(user.placeData)
  }, user.placeData);

  console.log(placeData);
  console.log(user.placeData);
  
  for (let placeIdx = 0; placeIdx < user.placeData.length; placeIdx++) {
    let totalSpent = 0;
    labelTitles.push(user.placeData[placeIdx]["types"][0]);

    for (let picId = 0; picId < user.foodprint.data.foodprint[placeIdx]["photos"].length; picId++){
      totalSpent += Number(user.foodprint["data"]["foodprint"][placeIdx]["photos"][picId]["price"]);
    }
    price.push(totalSpent);
  }

  return (
      <div>
        <Doughnut
          data={{
            "labels": labelTitles,
            "datasets": [
              {
                "label": "Population (millions)",
                "backgroundColor": ["#3e95cd"],
                "data": price,
              }
            ]}}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
  );
};

export default SpendingChart;
