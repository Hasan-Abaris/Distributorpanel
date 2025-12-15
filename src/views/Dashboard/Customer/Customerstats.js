'use client'

export default function VisitorStats() {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* New Visitors */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="text-sm font-medium opacity-90">
            New Visitors
          </div>

          <div className="text-3xl font-bold mt-1">
            5,420
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-trending-up" />
            +6.2% vs last week
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-user-plus text-xl" />
          </div>
        </div>

        {/* Returning Customers */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-blue-500 to-sky-600">
          <div className="text-sm font-medium opacity-90">
            Returning Customers
          </div>

          <div className="text-3xl font-bold mt-1">
            1,120
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-trending-up" />
            +1.1% vs last week
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-users text-xl" />
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="relative w-[262px] h-[161px] rounded-xl p-4 text-white shadow-lg
                        bg-gradient-to-r from-teal-500 to-cyan-600">
          <div className="text-sm font-medium opacity-90">
            Conversion Rate
          </div>

          <div className="text-3xl font-bold mt-1">
            3.9%
          </div>

          <div className="mt-2 text-xs flex items-center gap-1 opacity-90">
            <i className="tabler-trending-up" />
            Slight increase
          </div>

          <div className="absolute top-3 right-3 bg-white/20 p-2 rounded-full">
            <i className="tabler-percentage text-xl" />
          </div>
        </div>

      </div>
    </div>
  )
}
