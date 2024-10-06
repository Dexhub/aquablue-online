import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import QRCode from 'qrcode.react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Here you would typically send the form data to a server
  }

  const whatsappMessage = encodeURIComponent("Hi, I found you through your website and would like to connect. My name is ")
  const whatsappLink = `https://wa.me/919898384956?text=${whatsappMessage}`

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formState.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-500 mr-4" />
              <p>+919898384956</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-500 mr-4" />
              <p>info@aquablue.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-500 mr-4" />
              <p>18-19, Vraj Vihar part 5, Prernatirth Derasar Rd, near Seema Hall, opp. HDFC Bank, Vraj Vihar, Jodhpur Village, Ahmedabad, Gujarat 380015, India</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Chat on WhatsApp</h3>
            <div className="bg-white p-4 rounded-lg inline-block">
              <QRCode value={whatsappLink} size={128} />
            </div>
            <p className="mt-2 text-sm text-gray-400">Scan to start a conversation</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact