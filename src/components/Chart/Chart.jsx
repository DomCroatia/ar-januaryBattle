import { useState } from "react";
import Filter from "../Filter/Filter";
import { chartRegistry } from "../../utils/chartRegistry";
import {
  Chart as ChartJs,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css";

ChartJs.register(
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
);

export default function Chart() {
  const [chartType, setChartType] = useState(null);
  const [groupBy, setGroupBy] = useState(null);

  const chartConfig = chartRegistry[chartType];
  const SelectedChart = chartConfig?.component;

  const handleChartChange = (value) => {
    const [type, group] = value.split("-");
    setChartType(type);
    setGroupBy(group || null);
  };

  return (
    <div>
      <Filter onChartChange={handleChartChange}></Filter>
      <div className="container">
        {SelectedChart && (
          <SelectedChart
            data={chartConfig?.data(groupBy)}
            options={chartConfig?.options}
          />
        )}
      </div>
    </div>
  );
}
