import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold">K</div>
          <span className="text-xl font-bold tracking-tight">Kazify.ai</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#courses" className="hover:text-gray-900">Courses</a>
          <a href="#features" className="hover:text-gray-900">Why Kazify</a>
          <a href="#lead" className="hover:text-gray-900">Get Started</a>
          <a href="/test" className="hover:text-gray-900">System Test</a>
        </nav>
        <a href="#lead" className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700">Join Free</a>
      </div>
    </header>
  )
}
