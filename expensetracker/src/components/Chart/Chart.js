import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // dataPointValues is an array of 12 values so using spread operator we convert it into a list of arguments because max function takes a list of arguments
  const totalMax = Math.max(...dataPointValues);
  console.log(totalMax);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
