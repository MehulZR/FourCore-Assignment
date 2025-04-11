"use client";

import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { BagIcon, TicketIcon } from "./ui/icons";

const chartConfig = {
  target: {
    label: "Target Sales",
    color: "#FFCF00",
  },
  reality: {
    label: "Reality Sales",
    color: "#4AB58E",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", target: 75, reality: 55 },
  { month: "Feb", target: 70, reality: 48 },
  { month: "Mar", target: 80, reality: 42 },
  { month: "Apr", target: 70, reality: 52 },
  { month: "May", target: 96, reality: 65 },
  { month: "Jun", target: 97, reality: 65 },
  { month: "Jul", target: 99, reality: 65 },
];

const TargetVsRealityCard = () => {
  return (
    <div className="p-8 col-start-6 col-end-8 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px]">Target vs Reality</h2>
      <ChartContainer config={chartConfig} className="mt-5">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Bar dataKey="reality" fill="#4AB58E" radius={4} />
          <Bar dataKey="target" fill="#FFCF00" radius={4} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        </BarChart>
      </ChartContainer>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="bg-[#E2FFF3] rounded-[8px] w-9 h-9 flex justify-center items-center *:stroke-[#4AB58E]">
              <BagIcon width={18} height={18} />
            </div>
            <div>
              <p className="font-semibold text-xs">Reality Sales</p>
              <p className="text-[10px] text-[#737791]">Global</p>
            </div>
          </div>
          <p className="text-[#27AE60] font-medium text-sm">8,823</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="bg-[#FFF4DE] rounded-[8px] w-9 h-9 flex justify-center items-center *:stroke-[#FFA800]">
              <TicketIcon width={18} height={18} />
            </div>
            <div>
              <p className="font-semibold text-xs">Target Sales</p>
              <p className="text-[10px] text-[#737791]">Commercial</p>
            </div>
          </div>
          <p className="text-[#FFA412] font-medium text-sm">12,122</p>
        </div>
      </div>
    </div>
  );
};
export default TargetVsRealityCard;
