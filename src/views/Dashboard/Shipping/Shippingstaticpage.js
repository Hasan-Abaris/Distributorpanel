'use client'

export default function ShippingStatsPage() {
  return (
    <div className="mt-3">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Transit Vehicles */}
        <div className="relative rounded-xl p-5 text-white shadow-lg bg-gradient-to-r from-green-500 to-emerald-600">
          <div className="text-sm font-medium opacity-90">
            Transit Vehicles
          </div>
          <div className="text-3xl font-bold mt-1">
            124
          </div>
          <div className="mt-2 text-sm flex items-center gap-2 opacity-90">
            <i className="tabler-trending-up" />
            2.1% Up vs last week
          </div>

          <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full">
            <i className="tabler-truck text-2xl" />
          </div>
        </div>

        {/* Delayed Shipments */}
        <div className="relative rounded-xl p-5 text-white shadow-lg bg-gradient-to-r from-blue-500 to-sky-600">
          <div className="text-sm font-medium opacity-90">
            Delayed Shipments
          </div>
          <div className="text-3xl font-bold mt-1">
            32
          </div>
          <div className="mt-2 text-sm flex items-center gap-2 opacity-90">
            <i className="tabler-trending-down" />
            0.7% Down vs yesterday
          </div>

          <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full">
            <i className="tabler-clock-hour-4 text-2xl" />
          </div>
        </div>

        {/* Avg Delivery Time */}
        <div className="relative rounded-xl p-5 text-white shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600">
          <div className="text-sm font-medium opacity-90">
            Avg Delivery Time
          </div>
          <div className="text-3xl font-bold mt-1">
            2.4 days
          </div>
          <div className="mt-2 text-sm flex items-center gap-2 opacity-90">
            <i className="tabler-refresh" />
            Improved
          </div>

          <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full">
            <i className="tabler-timer text-2xl" />
          </div>
        </div>

        {/* On-Time % */}
        <div className="relative rounded-xl p-5 text-white shadow-lg bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="text-sm font-medium opacity-90">
            On-Time %
          </div>
          <div className="text-3xl font-bold mt-1">
            94%
          </div>
          <div className="mt-2 text-sm flex items-center gap-2 opacity-90">
            <i className="tabler-trending-up" />
            Stable
          </div>

          <div className="absolute top-4 right-4 bg-white/20 p-3 rounded-full">
            <i className="tabler-circle-check text-2xl" />
          </div>
        </div>

      </div>
    </div>
  )
}
