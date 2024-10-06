import React from 'react'
import { motion } from 'framer-motion'

const productCategories = [
  { 
    name: "Tiles", 
    items: ["Qutone Dimore", "Simpolo Nexion", "Handmade Tiles", "Moroccan Tiles", "Swimming Pool Mosaics", "Outdoor Tiles (15mm & 20mm)"]
  },
  { 
    name: "Sanitaryware & Fittings", 
    items: ["Jaquar", "Kohler", "TOTO"]
  },
  { 
    name: "Bath Solutions", 
    items: ["Bath Tubs", "Shower Enclosures", "Steam Rooms"]
  },
  { 
    name: "Flooring", 
    items: ["Wooden Flooring", "Vinyl Flooring", "Laminate Flooring"]
  }
]

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Product Range
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {productCategories.map((category, index) => (
          <motion.div
            key={category.name}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-64 bg-gray-200 relative overflow-hidden">
              <img 
                src={`https://source.unsplash.com/random/800x600?${category.name.toLowerCase()},bathroom`} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">{category.name}</h2>
              </div>
            </div>
            <div className="p-6">
              <ul className="list-disc list-inside space-y-2">
                {category.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item}
                    className="text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Products