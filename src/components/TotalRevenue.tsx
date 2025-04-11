"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const LegendIcon = (classname: string) => {
  return <div className={`w-3 h-3 rounded-full ${classname}`}></div>;
};

const chartConfig = {
  online: {
    label: "Online Sales",
    color: "#0095FF",
    icon: () => LegendIcon("bg-[#0095FF]"),
  },
  offline: {
    label: "Offline Sales",
    color: "#00E096",
    icon: () => LegendIcon("bg-[#00E096]"),
  },
} satisfies ChartConfig;

const chartData = [
  { day: "Mon", online: 14000, offline: 13000 },
  { day: "Tue", online: 17000, offline: 12500 },
  { day: "Wed", online: 6500, offline: 22500 },
  { day: "Thu", online: 16000, offline: 6500 },
  { day: "Fri", online: 12000, offline: 11000 },
  { day: "Sat", online: 16500, offline: 14000 },
  { day: "Sun", online: 21500, offline: 13000 },
];

const TotalRevenueCard = () => {
  return (
    <div className="p-8 col-start-1 col-end-4 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px]">Total Revenue</h2>
      <ChartContainer config={chartConfig} className="mt-5">
        <BarChart accessibilityLayer data={chartData} margin={{ left: -10 }}>
          <Bar
            dataKey="online"
            fill="#0095FF"
            radius={[2, 2, 0, 0]}
            barSize={15}
          />
          <Bar
            dataKey="offline"
            fill="#00E096"
            radius={[2, 2, 0, 0]}
            barSize={15}
          />
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis axisLine={false} tickLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
export default TotalRevenueCard;
