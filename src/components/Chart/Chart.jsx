import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const { data } = props;

    const maxValue = Math.max(...data.map((el) => el.value));

    if (!maxValue) return;

    return (
        <div className="chart">
            {data.map((el) => (
                <ChartBar
                    key={el.label}
                    value={el.value}
                    maxValue={maxValue}
                    label={el.label}
                />
            ))}
        </div>
    );
};

export default Chart;
