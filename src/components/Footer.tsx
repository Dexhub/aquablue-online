import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">AquaBlue</h3>
            <p className="text-gray-400">Redefining spaces with innovative designs and premium quality for over four decades.</p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="/studios" className="text-gray-400 hover:text-white transition duration-300">Studios</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 AquaBlue. Elevating spaces, inspiring lives.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer