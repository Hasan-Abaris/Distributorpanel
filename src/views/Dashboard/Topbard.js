'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function TopBar({ onMenuClick }) {
  const [activeTab, setActiveTab] = useState('Month')
  const tabs = ['Week', 'Month', 'Quarter']

  return (
    <header
      className="
        fixed lg:static top-0 left-0 right-0 z-40
        bg-white border-b
        h-[72px]
        px-4 md:px-6
        flex items-center justify-between
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu />
        </button>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-xs md:text-sm text-gray-500">
            Thursday, December 04, 2025
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex border rounded-full overflow-hidden">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 text-sm border rounded-xl outline-none"
        />
      </div>
    </header>
  )
}
