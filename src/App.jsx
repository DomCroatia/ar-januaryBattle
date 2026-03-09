import { useState } from "react";
import {
  Chart as Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble, Bar } from "react-chartjs-2";
import {
  getBarChartData,
  getBubbleChartData,
  bubbleOptions,
  barOptions,
} from "./utils/dataFormatting";
import "./App.css";
import Filter from "./Filter/Filter";

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
);

function App() {
  const [chartType, setChartType] = useState(null);
  const [groupBy, setgroupBy] = useState(null);

  const chartRegistry = {
    bar: {
      component: Bar,
      data: getBarChartData,
      options: barOptions,
    },
    bubble: {
      component: Bubble,
      data: getBubbleChartData,
      options: bubbleOptions,
    },
  };

  const chartConfig = chartRegistry[chartType];
  const SelectedChart = chartConfig?.component;

  // bolji nacin za izvest kad je isti chart a drugaciji podaci
  const handleChartChange = (value) => {
    if (value.split("-").length >= 2) {
      const split = value.split("-");

      setChartType(split[0]);
      setgroupBy(split[split.length - 1]);
    } else {
      setChartType(value);
    }
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

export default App;
