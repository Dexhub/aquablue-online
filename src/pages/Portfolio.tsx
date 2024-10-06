import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Zen Minimalist Oasis', category: 'Residential', description: 'A serene bathroom retreat featuring clean lines and natural materials.' },
  { id: 2, title: 'Opulent Gold & Marble Suite', category: 'Luxury', description: 'Extravagant master bathroom with gold fixtures and rare marble finishes.' },
  { id: 3, title: 'Urban Industrial Loft', category: 'Commercial', description: 'Edgy bathroom design for a trendy downtown restaurant.' },
  { id: 4, title: 'Coastal Retreat', category: 'Residential', description: 'Beach-inspired bathroom with a freestanding tub and ocean views.' },
  { id: 5, title: 'Eco-Friendly Spa', category: 'Commercial', description: 'Sustainable bathroom design for a high-end eco resort.' },
  { id: 6, title: 'Art Deco Revival', category: 'Luxury', description: 'Glamorous bathroom inspired by the roaring twenties.' }
]

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold text-center mb-16">Our Masterpieces</h1>
      
      <div className="flex justify-center mb-12">
        {['All', 'Residential', 'Commercial', 'Luxury'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={`https://source.unsplash.com/random/800x600?luxury,bathroom&sig=${project.id}`} 
              alt={project.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-500 mb-4">{project.category}</p>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Portfolio