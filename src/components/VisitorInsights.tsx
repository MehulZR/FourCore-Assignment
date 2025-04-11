"use client";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartConfig = {
  loyal: {
    label: "Loyal Customers",
    color: "#A700FF",
  },
  new: {
    label: "New Customers",
    color: "#EF4444",
  },
  unique: {
    label: "Unique Customers",
    color: "#3CD856",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", loyal: 300, new: 200, unique: 100 },
  { month: "Feb", loyal: 200, new: 300, unique: 200 },
  { month: "Mar", loyal: 100, new: 200, unique: 300 },
  { month: "Apr", loyal: 200, new: 100, unique: 200 },
  { month: "May", loyal: 300, new: 200, unique: 100 },
  { month: "Jun", loyal: 200, new: 300, unique: 200 },
  { month: "Jul", loyal: 100, new: 200, unique: 300 },
  { month: "Aug", loyal: 200, new: 100, unique: 200 },
  { month: "Set", loyal: 300, new: 200, unique: 100 },
  { month: "Oct", loyal: 200, new: 300, unique: 200 },
  { month: "Num", loyal: 100, new: 200, unique: 300 },
  { month: "Dec", loyal: 200, new: 100, unique: 200 },
];

const VisitorInsightsCard = () => {
  return (
    <div className="p-8 col-start-5 col-end-8 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px]">Visitor Insights</h2>
      <ChartContainer config={chartConfig} className="mt-5">
        <LineChart accessibilityLayer data={chartData} margin={{ left: -30 }}>
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            scale="band"
          />
          <YAxis tickLine={false} axisLine={false} />
          <Line
            dataKey="loyal"
            stroke="#A700FF"
            strokeWidth={3}
            type={"monotone"}
            dot={false}
          />
          <Line
            dataKey="new"
            stroke="#EF4444"
            strokeWidth={3}
            type={"monotone"}
            dot={false}
          />
          <Line
            dataKey="unique"
            stroke="#3CD856"
            strokeWidth={3}
            type={"monotone"}
            dot={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
export default VisitorInsightsCard;
