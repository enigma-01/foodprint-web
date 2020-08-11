import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";


const SpendingChart = () => {

    let placeIDs = [];
    let placeNames = [];

    const getFoodprint = async () => {
        axios.get(`https://foodprint-prod.herokuapp.com/api/users/foodprint`, {
            headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,
            },
        })
        .then((response) => {
            console.log(response.data["foodprint"]);

            for (let placeIdx = 0; placeIdx < response.data["foodprint"].length; placeIdx++){
                placeIDs.push(response.data["foodprint"][placeIdx]["place_id"]);
            }
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    getFoodprint();
    console.log(placeIDs);


    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    return (null)

//   const chart = async () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//         .get(`https://foodprint-prod.herokuapp.com/api/users/foodprint`, {
//             headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//             },
//         })
//         .then(response => {
//             //console.log(response);
        
//         setChartData({
//           labels: empAge,
//           datasets: [
//             {
//               label: "level of thiccness",
//               data: empSal,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(empSal, empAge);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//       <div>
//         <Doughnut
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "THICCNESS SCALE", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//  );
}

export default SpendingChart;