import PropertyLayoutCard from "../../components/WebDesign/cards/PropertyLayoutCard";
import InvestorCard from "../../components/WebDesign/cards/InvestorCard";
import MembershipCard from "../../components/WebDesign/cards/MembershipCard";
import MissionVisionCard from "../../components/WebDesign/cards/MissionVisionCard";
export default function DashboardGrid() {
  return (
    <div className="
        w-full
        px-4
        sm:px-6
        lg:max-w-[1650px]
        lg:mx-auto
        grid
        grid-cols-1
        lg:grid-cols-[1.2fr_1fr_0.9fr]
        gap-5
        ">
      {/* LEFT COLUMN */}
      <PropertyLayoutCard />

      {/* CENTER COLUMN */}
      <InvestorCard />

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-5 h-[550px]">
        <MembershipCard />
        <MissionVisionCard />
      </div>
    </div>
  );
}