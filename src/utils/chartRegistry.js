import { Bubble, Bar } from "react-chartjs-2";
import {
  getBarChartData,
  getBubbleChartData,
  bubbleOptions,
  barOptions,
} from "./dataFormatting";

export const chartRegistry = {
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
