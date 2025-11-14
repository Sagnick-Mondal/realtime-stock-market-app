'use client'

import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'
import { TrendingUp } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 header bg-transparent z-50">
      <div className="container header-wrapper flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer select-none">
          <TrendingUp className="w-8 h-8 text-emerald-300" />

          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-yellow-500">Stock</span>
            <span className="text-white">Now</span>
            <span className="text-yellow-500">.</span>
          </h1>
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
