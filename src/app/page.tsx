import TodaySalesCard from "@/components/TodaySales";
import VisitorInsightsCard from "@/components/VisitorInsights";
import TotalRevenueCard from "@/components/TotalRevenue";
import CustomerSatisfactionCard from "@/components/CustomerSatisfaction";
import TargetVsRealityCard from "@/components/TargetVsReality";
import TopProductsCard from "@/components/TopProducts";
import VolumeVsServiceCard from "@/components/VolumeVsService";
import SalesMappingCard from "@/components/SalesMapping";

export default function Home() {
  return (
    <div className="p-8 grid grid-cols-7 gap-8 grow overflow-scroll *:shadow-sm/5">
      <TodaySalesCard />
      <VisitorInsightsCard />
      <TotalRevenueCard />
      <CustomerSatisfactionCard />
      <TargetVsRealityCard />
      <TopProductsCard />
      <SalesMappingCard />
      <VolumeVsServiceCard />
    </div>
  );
}
