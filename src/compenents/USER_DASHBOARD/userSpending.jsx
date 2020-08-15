import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useAppContext } from "../../libs/contextLib.js";
import App from "../App/index.jsx";

const StyledDiv = styled.div`
  width: 900px;
  height: 600px;
  display: flex column;
  justify-content: center;
`;

const StyledText = styled.p`
  font-size: 20px;
  color: #53b154;
  font-weight: 500;
  margin: 64px 0px 5px 0px;
`;

const SpendingChart = () => {
  const { user, placeData } = useAppContext();

  let labelTitles = [];
  let price = {};
  let spendingData = [];
  let totalSpent = 0;

  for (let placeIdx = 0; placeIdx < placeData.length; placeIdx++) {
    let formattedLabel = placeData[placeIdx]["types"][0];

    if (
      !labelTitles.includes(
        formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1)
      )
    ) {
      labelTitles.push(
        formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1)
      );
      price[formattedLabel] = 0;
      console.log(labelTitles);
      console.log(price);
    }

    for (
      let picId = 0;
      picId < user.foodprint.data.foodprint[placeIdx]["photos"].length;
      picId++
    ) {
      console.log(
        user.foodprint["data"]["foodprint"][placeIdx]["photos"][picId]["price"]
      );

      price[formattedLabel] += Number(
        user.foodprint["data"]["foodprint"][placeIdx]["photos"][picId]["price"]
      );
      console.log(price);
      console.log(labelTitles);
    }
  }

  for (let amt in price) {
    spendingData.push(price[amt]);
    totalSpent += price[amt];
  }

  return (
    <div>
      {placeData.length == user.foodprint.data["foodprint"].length ? (
        <>
          <StyledDiv>
            <StyledText>You've spent a total of ${totalSpent}</StyledText>
            <Doughnut
              data={{
                labels: labelTitles,
                datasets: [
                  {
                    backgroundColor: ["#518FFD", "#FC6C84"],
                    data: spendingData,
                  },
                ],
              }}
              options={{
                cutoutPercentage: 70,
                responsive: true,
                title: {
                  text: "Total Spending",
                  fontSize: 40,
                  fontColor: "#f6b26b",
                  display: true,
                },
              }}
            />
          </StyledDiv>
        </>
      ) : (
        <>
          <p>GRAPH LOADING</p>
        </>
      )}
    </div>
  );
};

export default SpendingChart;
