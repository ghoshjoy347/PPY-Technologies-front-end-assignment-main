"use client";

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import StatCard from "@/components/StatCard";
import TimeFilter from "@/components/TimeFilter";
import ClientsChart from "@/components/Charts/ClientsChart";
import SipBusiness from "@/components/Charts/SipBusiness";
import MonthlyMIS from "@/components/Charts/MonthlyMIS";
import { DarkModeProvider, useDarkMode } from "@/components/DarkModeContext";

function DashboardContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          title="Current AUM" 
          value="₹12.19 Cr" 
          change="+0.77% MoM" 
          changeType="positive"
        />
        <Card 
          title="Current SIP" 
          value="₹1.39 Lakh" 
          change="+0% MoM" 
          changeType="neutral"
        />
      </div>
      <div className="px-6">
        <TimeFilter onChange={(f) => console.log("Filter:", f)} />
      </div>
      <div className="grid grid-cols-5 gap-4 px-6">
        <StatCard label="Purchases" value="₹0.00" type="purchases" />
        <StatCard label="Redemptions" value="₹0.00" type="redemptions" />
        <StatCard label="Rejected Txn" value="₹0.00" type="rejectedTxn" />
        <StatCard label="SIP Rejections" value="₹0.00" type="sipRejections" />
        <StatCard label="New SIP" value="₹0.00" type="newSip" />
      </div>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ClientsChart />
        <SipBusiness />
        <MonthlyMIS />
      </div>
    </main>
  );
}

export default function Dashboard() {
  return (
    <DarkModeProvider>
      <DashboardContent />
    </DarkModeProvider>
  );
}
