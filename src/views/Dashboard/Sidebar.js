'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IndianRupee, Truck, Users, FileText } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menu = [
    { label: 'Sales Data', href: '/Dashboard/Sales', icon: IndianRupee },
    { label: 'Shipping', href: '/Dashboard/shipping', icon: Truck },
    { label: 'Visitors/Customers Detail', href: '/Dashboard/customers', icon: Users },
    { label: 'Reports', href: '/Dashboard/reports', icon: FileText }
  ]

  return (
    <aside className='w-[260px] bg-white h-screen border-r border--100 p-3 flex flex-col'>
      <ul className='list-none flex flex-col gap-7'>
        {menu.map(item => {
          const active = pathname === item.href
          const Icon = item.icon

          return (
            <li key={item.href}>
              <Link href={item.href}>
                <button
                  className={`w-full flex items-center gap-4 px-4 py-1 rounded-xl font- transition
                    ${active 
                      ? 'text-white shadow-[0px_6px_20px_rgba(106,69,255,0.3)] bg-gradient-to-r from-[#6c4cff] to-[#8a56ff]' 
                      : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-[#6c4cff] hover:to-[#8a56ff]'
                    }`}
                >
                  <span
                    className={`p-3 rounded-xl flex items-center justify-center
                      ${active ? 'bg-white/30 text-white' : 'bg-gray-100 text-gray-600 group-hover:text-white'}
                    `}
                  >
                    <Icon className='w-3 h-3 ' />
                  </span>

                  {item.label}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
