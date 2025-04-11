"use client";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";

const chartConfig = {
  volume: {
    label: "Volume",
    color: "#0095FF",
  },
  services: {
    label: "Services",
    color: "#00E096",
  },
} satisfies ChartConfig;

const chartData = [
  { volume: 75, services: 50 },
  { volume: 100, services: 55 },
  { volume: 75, services: 20 },
  { volume: 65, services: 25 },
  { volume: 50, services: 20 },
  { volume: 55, services: 35 },
];

const VolumeVsServiceCard = () => {
  return (
    <div className="col-start-6 col-end-8 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px] px-8 pt-8">
        Volume vs Service Level
      </h2>
      <ChartContainer config={chartConfig} className="mt-5 px-8">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="services" stackId="a" fill="#00E096" barSize={20} />
          <Bar
            dataKey="volume"
            stackId="a"
            fill="#0095FF"
            barSize={20}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
      <hr className="bg-[#EDF2F6] my-8" />
      <div className="flex justify-center items-center gap-4 px-8 pb-8">
        <div className="flex  justify-center gap-2">
          <div className="bg-[#0095FF] h-2 w-2 rounded-full mt-2"></div>
          <div>
            <p className="text-[#96A5B8]">Volume</p>
            <p className="font-medium text-sm">1,135</p>
          </div>
        </div>
        <div className="w-0.5 h-4 bg-[#BDC9D3]"></div>
        <div className="flex  justify-center gap-2">
          <div className="bg-[#00E096] h-2 w-2 rounded-full mt-2"></div>
          <div>
            <p className="text-[#96A5B8]">Services</p>
            <p className="font-medium text-sm">635</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeVsServiceCard;
