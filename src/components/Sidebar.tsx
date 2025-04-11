import {
  BagIcon,
  ChartLineIcon,
  CogIcon,
  GraphIcon,
  LeaderboardIcon,
  LogoFilledIcon,
  LogoIcon,
  MessageIcon,
  ShoppingCartIcon,
  SignOutIcon,
} from "@/components/ui/icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[345px] shrink-0 bg-white p-12 justify-between flex flex-col gap-12 overflow-y-auto">
      <div className="flex flex-col gap-12">
        {/* logo */}
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-[#5D5FEF] flex justify-center items-center rounded-[8px]">
            <LogoIcon width={24} height={24} />
          </div>
          <span className="font-semibold text-3xl">Dabang</span>
        </div>
        {/* menu */}
        <div className="flex flex-col text-[18px]">
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex items-center gap-6 bg-[#5D5FEF] text-white font-semibold"
          >
            <GraphIcon />
            Dashboard
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <LeaderboardIcon />
            Leaderboard
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <ShoppingCartIcon />
            Order
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <BagIcon />
            Products
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <ChartLineIcon />
            Sales Report
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <MessageIcon />
            Messages
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <CogIcon />
            Settings
          </Link>
          <Link
            href="#"
            className="px-6 py-4 rounded-2xl flex  items-center gap-6 text-[#737791]"
          >
            <SignOutIcon />
            Sign Out
          </Link>
        </div>
      </div>
      {/*  banner */}
      <div className="mt-auto flex flex-col gap-[30px] overflow-clip justify-center items-center bg-[#5D5FEF] rounded-[20px] py-8 px-12 relative before:w-[240px] before:h-[240px] before:absolute before:-top-30 before:-right-30 before:rounded-full before:bg-radial before:from-white/0 before:to-white/20 after:w-[240px] after:h-[240px] after:absolute after:-bottom-30 after:-left-30 after:rounded-full after:bg-radial after:from-white/0 after:to-white/20">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="bg-white rounded-[10px] p-3">
            <LogoFilledIcon width={24} height={24} />
          </div>
          <h2 className="font-semibold text-[20px] text-white text-center">
            Dabang Pro
          </h2>
          <p className="font-medium text-sm opacity-80 text-white text-center">
            Get access to all features on tetumbas
          </p>
        </div>
        <button className="bg-white w-full py-2 px-4 rounded-[10px] text-[#5D5FEF] font-semibold">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
