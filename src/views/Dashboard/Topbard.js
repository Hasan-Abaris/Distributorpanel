"use client"
import { useState } from "react";

export default function TopBar() {
  const [activeTab, setActiveTab] = useState("Month"); // default active tab

  const tabs = ["Week", "Month", "Quarter"];

  return (
    <div className="w-full bg-white border-b px-6 py-4 flex items-center justify-between">
      
      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h2>
        <p className="text-sm text-gray-500">Thursday, December 04, 2025</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Week / Month / Quarter Buttons */}
        <div className="flex border rounded-full overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm ${
                activeTab === tab
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-gray-300"
        />

      </div>
    </div>
  );
}
