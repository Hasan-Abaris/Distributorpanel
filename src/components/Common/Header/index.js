'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-[#D1EDF5]">
      <div className="max-w-[1237px] mx-auto px-6 flex items-center justify-between h-[60px]">

        {/* ================= LOGO ================= */}
        <div className="flex items-center">
          <img
            src="/images/logos/logo.png"
            alt="Baofeng Logo"
            className="h-[24px] w-auto"
          />
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-[80px] text-sm font-bold text-black font-inter list-none ">
          <NavItem text="Home" />
          <NavItem text="Sell Online" />
          <NavItem text="Fees & Commission" />
          <NavItem text="Grow" />
          <NavItem text="Contact" />
        </ul>

        {/* ================= DESKTOP BUTTON ================= */}
        <div className="hidden lg:block">
          <Link
            href="/login"
            className="text-white text-sm font-medium px-5 py-2 rounded-md transition
            bg-[linear-gradient(160.41deg,_#0B81CF_-5.15%,_#0069AF_87.35%)]
            hover:opacity-90"
          >
            Become Distributor
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden bg-[#D1EDF5] border-t border-black/10">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm font-bold text-black font-inter list-none">
            <NavItem text="Home" mobile />
            <NavItem text="Sell Online" mobile />
            <NavItem text="Fees & Commission" mobile />
            <NavItem text="Grow" mobile />
            <NavItem text="Contact" mobile />

            {/* Mobile Button */}
            <Link
              href="/login"
              className="mt-4 text-center text-white text-sm font-medium px-5 py-3 rounded-md transition
              bg-[linear-gradient(160.41deg,_#0B81CF_-5.15%,_#0069AF_87.35%)]
              hover:opacity-90"
            >
              Become Distributor
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

/* ================= NAV ITEM ================= */

function NavItem({ text, mobile }) {
  return (
    <li>
      <Link
        href="#"
        className={`hover:text-blue-600 transition ${
          mobile ? 'block' : ''
        }`}
      >
        {text}
      </Link>
    </li>
  )
}
