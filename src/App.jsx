import { useState } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { chartRegistry } from "./utils/chartRegistry";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Splash from "./components/Splash/Splash";

Chart.register(
  LinearScale,
  CategoryScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
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
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}
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
