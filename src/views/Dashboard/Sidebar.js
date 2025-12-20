'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IndianRupee, Truck, Users, FileText } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menu = [
    { label: 'Sales', href: '/Dashboard/Sales', icon: IndianRupee },
    { label: 'Shipping', href: '/Dashboard/shipping', icon: Truck },
    { label: 'Customers', href: '/Dashboard/customers', icon: Users },
    { label: 'Reports', href: '/Dashboard/reports', icon: FileText }
  ]

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex w-[260px] h-screen bg-white border-r p-4">
        <ul className="flex flex-col gap-2 w-full list-none">
          {menu.map(item => {
            const active = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                    ${active
                      ? 'bg-gradient-to-r from-[#6c4cff] to-[#8a56ff] text-white'
                      : 'text-gray-600 hover:bg-gray-100'}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
        <ul className="flex justify-around items-center h-16">
          {menu.map(item => {
            const active = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center gap-1 text-xs
                    ${active ? 'text-[#6c4cff]' : 'text-gray-500'}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
