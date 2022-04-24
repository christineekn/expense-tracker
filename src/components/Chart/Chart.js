import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  // creating an array of values for every month
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* will create an array with the data of each month we have values, 
            and not create data points for every month  */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax} // max value accross all months
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
