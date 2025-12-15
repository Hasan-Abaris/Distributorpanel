'use client';
import TopBar from "@/views/Dashboard/Topbard";
import Sidebar from "@/views/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">

      {/* TOPBAR ALWAYS FIRST */}
      <TopBar />

      {/* BODY: Sidebar + Content */}
      <div className="flex flex-1  overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
