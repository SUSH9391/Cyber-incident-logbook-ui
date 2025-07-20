import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-lg font-bold tracking-wide">Cyber-Paranava</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="#Home" className="hover:text-orange-400 transition">Home</a>
          <a href="#Logs" className="hover:text-orange-400 transition">Logs</a>
          <a href="#About" className="hover:text-orange-400 transition">About</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1 px-2">
          <a href="#Home" className="block py-2 px-3 rounded hover:bg-gray-800">Home</a>
          <a href="#Logs" className="block py-2 px-3 rounded hover:bg-gray-800">Logs</a>
          <a href="#About" className="block py-2 px-3 rounded hover:bg-gray-800">About</a>
        </div>
      )}
    </nav>
  );
}
