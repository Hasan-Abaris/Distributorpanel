'use client'

export default function ReportsAndHealthPage() {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Monthly Sales Report */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-blue-700 to-indigo-700">
          <div className="text-sm font-medium opacity-90">
            Monthly Sales Report
          </div>

          <div className="text-xl font-bold mt-1">
            Export ready
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-download" />
            CSV / PDF
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-file-bar-chart text-xl" />
          </div>
        </div>

        {/* Customer Feedback */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-rose-800 to-red-800">
          <div className="text-sm font-medium opacity-90">
            Customer Feedback
          </div>

          <div className="text-3xl font-bold mt-1">
            1,022
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-message" />
            Last 30 days
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-messages text-xl" />
          </div>
        </div>

        {/* Inventory Health */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="text-sm font-medium opacity-90">
            Inventory Health
          </div>

          <div className="text-3xl font-bold mt-1">
            Good
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-trending-up" />
            Reviewed today
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-box text-xl" />
          </div>
        </div>

      </div>
    </div>
  )
}
