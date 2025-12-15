import { ArrowUpRight, ArrowDownRight, Users, Box, BarChart, Clock, RefreshCcw } from 'lucide-react'

const stats = [
  {
    title: 'Pending Orders',
    value: '181',
    change: '+8.5% Up from yesterday',
    trend: 'up',
    icon: Users,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Orders In Transit',
    value: '10,293',
    change: '+1.3% Up from past week',
    trend: 'up',
    icon: Box,
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Delivered Orders',
    value: '8,900',
    change: '-4.3% Down from yesterday',
    trend: 'down',
    icon: BarChart,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Customer Return',
    value: '2,040',
    change: '+1.8% Up from yesterday',
    trend: 'up',
    icon: Clock,
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Replacement',
    value: '321',
    change: '+8.5% Up from yesterday',
    trend: 'up',
    icon: Users,
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Total Purchase',
    value: '240',
    change: '+1.8% Up from yesterday',
    trend: 'up',
    icon: RefreshCcw,
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Total Orders',
    value: '1,356',
    change: '-4.3% Down from yesterday',
    trend: 'down',
    icon: BarChart,
    gradient: 'from-indigo-600 to-indigo-700'
  },
  {
    title: 'Refund',
    value: '293',
    change: '+1.3% Up from past week',
    trend: 'up',
    icon: Box,
    gradient: 'from-rose-600 to-rose-700'
  }
]

export default function DashboardStats() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {stats.map(stat => {
        const Icon = stat.icon
        return (
          <div
            key={stat.title}
            className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${stat.gradient}`}
          >
            {/* Background Icon */}
            <div className='absolute right-4 top-4 opacity-20'>
              <Icon className='w-16 h-16' />
            </div>

            {/* Content */}
            <div className='relative z-10'>
              <p className='text-sm font-medium opacity-90'>{stat.title}</p>
              <p className='text-4xl font-bold mt-2'>{stat.value}</p>
              <div className='flex items-center gap-2 mt-3 text-sm'>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className='w-4 h-4 text-green-300' />
                ) : (
                  <ArrowDownRight className='w-4 h-4 text-red-300' />
                )}
                <span className={stat.trend === 'up' ? 'text-green-200' : 'text-red-200'}>{stat.change}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
