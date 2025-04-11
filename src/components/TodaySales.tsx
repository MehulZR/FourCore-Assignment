import { Button } from "./ui/button";
import {
  DiscountIcon,
  ExportIcon,
  NewCustomerIcon,
  OrderIcon,
  SalesIcon,
} from "./ui/icons";

const TodaySalesCard = () => {
  return (
    <div className="p-8 col-start-1 col-end-5 bg-white rounded-[20px] flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-[20px]">Today&apos;s Sales</h2>
          <p className="text-[#737791]">Sales summary</p>
        </div>
        <Button variant="outline">
          <ExportIcon />
          Export
        </Button>
      </div>
      <div className="flex gap-8 overflow-auto">
        <div className="rounded-2xl p-5 bg-[#FFE2E5] grow">
          <div className="p-2 bg-[#FA5A7D] rounded-full w-min">
            <SalesIcon />
          </div>
          <h2 className="mt-4 font-semibold text-2xl">$1K</h2>
          <p className="mt-2 font-medium text-[#425166]">Total Sales</p>
          <p className="mt-2 font-medium text-[#4079ED] text-xs">
            +8% from yesterday
          </p>
        </div>
        <div className="rounded-2xl p-5 bg-[#FFF4DE] grow">
          <div className="p-2 bg-[#FF947A] rounded-full w-min">
            <OrderIcon />
          </div>
          <h2 className="mt-4 font-semibold text-2xl">300</h2>
          <p className="mt-2 font-medium text-[#425166]">Total Order</p>
          <p className="mt-2 font-medium text-[#4079ED] text-xs">
            +5% from yesterday
          </p>
        </div>
        <div className="rounded-2xl p-5 bg-[#DCFCE7] grow">
          <div className="p-2 bg-[#3CD856] rounded-full w-min">
            <DiscountIcon />
          </div>
          <h2 className="mt-4 font-semibold text-2xl">5</h2>
          <p className="mt-2 font-medium text-[#425166]">Product Sold</p>
          <p className="mt-2 font-medium text-[#4079ED] text-xs">
            +1.2% from yesterday
          </p>
        </div>
        <div className="rounded-2xl p-5 bg-[#F3E8FF] grow">
          <div className="p-2 bg-[#BF83FF] rounded-full w-min">
            <NewCustomerIcon />
          </div>
          <h2 className="mt-4 font-semibold text-2xl">8</h2>
          <p className="mt-2 font-medium text-[#425166]">New Customers</p>
          <p className="mt-2 font-medium text-[#4079ED] text-xs">
            +0.5% from yesterday
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodaySalesCard;
