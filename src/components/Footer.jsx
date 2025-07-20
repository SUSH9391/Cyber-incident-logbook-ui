import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 lg:px-8 py-4 mt-5 rounded-t-2xl shadow-inner">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
    <p className="text-center sm:text-left">
      &copy; {new Date().getFullYear()} Cyber-Paranava. All rights reserved.
    </p>

    <div className="flex gap-4">
      <a href="#privacy" className="hover:text-orange-400 transition">Privacy</a>
      <a href="#terms" className="hover:text-orange-400 transition">Terms</a>
      <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
    </div>
  </div>
</footer>

  )
}

export default Footer
