import { useEffect,useState } from "react";
import { api } from "../service/api";
import authHeader from "../service/AuthProvider";
import Sidebar from "./Sidebar"
import axios from "axios";
import LineChart from "./LineChart";

const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

const Income = () => {
    const [annualData, setAnnualData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

      const [quarterData, setQuarterData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

      const [monthData, setMonthData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    useEffect(() => {
        axios.get('http://localhost:8080/api/analysis/income/annual',{
            headers: authHeader()
        }).then((res) => {
            console.log(res.data);
            const temp = {labels:[],datasets:[]};
            temp.labels = res.data.map((data) => data.year);
            temp.datasets = [{
                label: "Annual Income",
                data: res.data.map((data) => data.income),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },];
            setAnnualData(temp);
        });
        axios.get('http://localhost:8080/api/analysis/income/quarter',{
            headers: authHeader()
        }).then((res) => {
            console.log(res.data);
            const temp = {labels:[],datasets:[]};
            temp.labels = res.data.map((data) => data.year+"/"+data.quarter);
            temp.datasets = [{
                label: "Quarter Income",
                data: res.data.map((data) => data.income),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },];
            setQuarterData(temp);
        });
        axios.get('http://localhost:8080/api/analysis/income/month',{
            headers: authHeader()
        }).then((res) => {
            console.log(res.data);
            const temp = {labels:[],datasets:[]};
            temp.labels = res.data.map((data) => data.year+"/"+data.month);
            temp.datasets = [{
                label: "Month Income",
                data: res.data.map((data) => data.income),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },];
            setMonthData(temp);
        });
    },[]);

    return (
        <div className="App">
        <Sidebar/>
        <div className="main-container">
            <div style={{ width: 700 }}>
                <LineChart chartData={annualData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={quarterData} />
            </div>
            <div style={{ width: 700 }}>
                <LineChart chartData={monthData} />
            </div>
        </div>
        </div>
    )
};

export default Income;