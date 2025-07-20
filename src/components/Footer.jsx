import React from 'react'

const Footer = () => {
  return (
    
   <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 lg:px-8 py-4 mt-5  " id="About">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
    <p className="text-center sm:text-left">
      &copy; {new Date().getFullYear()} Sushmitha. All rights reserved.
      <br/>
      
    </p>

    {/*<div className="flex gap-4">
      <a href="#privacy" className="hover:text-orange-400 transition">Privacy</a>
      <a href="#terms" className="hover:text-orange-400 transition">Terms</a>
      <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
    </div>**/}
    <div className='flex gap-4'>
        <p>This is a Pre-Internship project for Cyber Incident Logbook UI.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
