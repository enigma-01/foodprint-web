import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useAppContext } from "../../libs/contextLib.js";
import App from "../App/index.jsx";

const SpendingChart = () => {
  const { user, placeData } = useAppContext();

  let labelTitles = [];
  let price = {};

  for (let placeIdx = 0; placeIdx < placeData.length; placeIdx++) {
    let formattedLabel = placeData[placeIdx]["types"][0]

    if (!labelTitles.includes(formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1))) {
      labelTitles.push(formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1));
      price[formattedLabel] = 0;
      console.log(labelTitles)
      console.log(price)
    }

    for (let picId = 0; picId < user.foodprint.data.foodprint[placeIdx]["photos"].length; picId++) {

      console.log(user.foodprint["data"]["foodprint"][placeIdx]["photos"][picId]["price"])

      price[formattedLabel] += Number(
        user.foodprint["data"]["foodprint"][placeIdx]["photos"][picId]["price"]
      );
      console.log(price);
    }
  }

  return (
    <div>
      {placeData.length == user.foodprint.data["foodprint"].length ? (
        <>
          <div>
            <Doughnut
              data={{
                labels: labelTitles,
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd"],
                    data: price,
                  },
                ],
              }}
              options={{
                responsive: true,
                title: { text: "Spending Habits", display: true },
                }
              }
            />
          </div>
        </>
      ) 
      : 
      (
        <>
          <p>GRAPH LOADING</p>
        </>
      )}
    </div>
  );
};

export default SpendingChart;
