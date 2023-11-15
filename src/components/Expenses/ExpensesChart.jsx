import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const { data } = props;

    const chartData = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];

    data.forEach((element) => {
        const monthNumber = element.date.getMonth();
        chartData[monthNumber].value += element.amount;
    });

    return <Chart data={chartData} />;
};

export default ExpensesChart;
