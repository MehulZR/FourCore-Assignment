"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartConfig = {
  last: {
    label: "Last Month",
    color: "#0080DA",
  },
  current: {
    label: "Current Month",
    color: "#07E098",
  },
} satisfies ChartConfig;

const chartData = [
  { last: 180, current: 350 },
  { last: 220, current: 290 },
  { last: 100, current: 300 },
  { last: 110, current: 250 },
  { last: 120, current: 310 },
  { last: 125, current: 200 },
  { last: 200, current: 370 },
];

const CustomerSatisfactionCard = () => {
  return (
    <div className="p-8 col-start-4 col-end-6 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px]">
        Customer&apos;s Satisfaction
      </h2>
      <ChartContainer config={chartConfig} className="mt-5">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <defs>
            <linearGradient id="fillLast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0080DA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0080DA" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#07E098" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#07E098" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="last"
            type="natural"
            fill="url(#fillLast)"
            fillOpacity={0.4}
            stroke="#0080DA"
            stackId="a"
            dot={true}
          />
          <Area
            dataKey="current"
            type="natural"
            fill="url(#fillCurrent)"
            fillOpacity={0.4}
            stroke="#07E098"
            stackId="a"
            dot={true}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        </AreaChart>
      </ChartContainer>
      <hr className="bg-[#EDF2F6] my-8" />
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center  gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0095FF] realtive before:absolute before:w-5 before:h-1 before:bg-[#0080DA] before:-left-1.5 before:top-0.5 before:rounded-full -translate-y-2 mr-2"></div>
          <div>
            <span className="block text-[#96A5B8]">Last Month</span>
            <p className="font-medium text-sm">$3,004</p>
          </div>
        </div>
        <div className="w-0.5 h-4 bg-[#BDC9D3]"></div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#07E098] realtive before:absolute before:w-5 before:h-1 before:bg-[#05C283] before:-left-1.5 before:top-0.5 before:rounded-full -translate-y-2 mr-2"></div>
          <div>
            <span className="block text-[#96A5B8]">This Month</span>
            <p className="font-medium text-sm">$4,504</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfactionCard;
