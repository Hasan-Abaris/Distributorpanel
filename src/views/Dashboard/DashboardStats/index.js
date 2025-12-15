import ExpensesCard from "./ExpensesCard";
import LeadsCard from "./LeadsCard";
import ProfitCard from "./ProfitCard";


export default function DashboardStatics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mt-5">
      <ProfitCard />
      <ExpensesCard />
      <LeadsCard />
    </div>
  );
}