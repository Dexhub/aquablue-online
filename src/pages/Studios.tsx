import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const studios = [
  { 
    id: 1, 
    name: 'AquaBlu Flagship Studio', 
    address: '123 Design District, Metropolis', 
    hours: 'Mon-Sat: 10AM-7PM', 
    phone: '+1 (555) 123-4567',
    description: 'Our flagship studio showcases the latest in bathroom design trends and technology.'
  },
  { 
    id: 2, 
    name: 'AquaBlu Innovation Lab', 
    address: '456 Tech Park, Futureville', 
    hours: 'Mon-Fri: 9AM-6PM', 
    phone: '+1 (555) 987-6543',
    description: 'Experience cutting-edge bathroom concepts and virtual reality design sessions.'
  },
  { 
    id: 3, 
    name: 'AquaBlu Eco Center', 
    address: '789 Green Avenue, Sustainaburg', 
    hours: 'Tue-Sun: 10AM-8PM', 
    phone: '+1 (555) 246-8135',
    description: 'Dedicated to eco-friendly bathroom solutions and sustainable design practices.'
  }
]

const Studios: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold text-center mb-16">Our Design Studios</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Step into the world of AquaBlu at our innovative design studios. 
        Each location offers a unique experience, showcasing our commitment to 
        pushing the boundaries of bathroom design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {studios.map((studio, index) => (
          <motion.div 
            key={studio.id} 
            className="bg-white rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img 
              src={`https://source.unsplash.com/random/800x600?modern,showroom&sig=${studio.id}`} 
              alt={studio.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{studio.name}</h3>
              <p className="text-gray-600 mb-4">{studio.description}</p>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                <p className="text-gray-700">{studio.address}</p>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <p className="text-gray-700">{studio.hours}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-2" />
                <p className="text-gray-700">{studio.phone}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Studios