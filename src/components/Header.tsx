import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>AquaBlue</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Showroom', 'Products', 'Partners', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`${isScrolled ? 'text-gray-900' : 'text-gray-900'} hover:text-gray-600 transition duration-300`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4">
            {['Showroom', 'Products', 'Partners', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-gray-900 hover:text-gray-600 py-2 block"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header