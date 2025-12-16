'use client'

import TopBar from '@/views/Dashboard/Topbard'
import Sidebar from '@/views/Dashboard/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="h-dvh flex bg-gray-50">

      {/* Sidebar (desktop) + Bottom Nav (mobile handled inside Sidebar) */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar */}
        <TopBar />

        {/* Main Content */}
        <main
          className="
            flex-1 overflow-y-auto
            px-4 py-4 md:px-6
            pt-[72px] lg:pt-6
            pb-20 lg:pb-6
          "
        >
          {children}
        </main>
      </div>
    </div>
  )
}
