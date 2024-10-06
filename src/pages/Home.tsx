import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import QRCode from 'qrcode.react'

const Home: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hi, I found you through your website and would like to connect. My name is ")
  const whatsappLink = `https://wa.me/919825066268?text=${whatsappMessage}`

  const partners = [
    { name: 'Qutone Dimore', logo: 'https://example.com/qutone-logo.png' },
    { name: 'Simpolo Nexion', logo: 'https://example.com/simpolo-logo.png' },
    { name: 'Jaquar', logo: 'https://example.com/jaquar-logo.png' },
    { name: 'Kohler', logo: 'https://example.com/kohler-logo.png' },
    { name: 'TOTO', logo: 'https://example.com/toto-logo.png' },
  ]

  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
        <div className="text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AquaBlue
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevating Spaces with Exquisite Bathroom Tiles, Fittings & Sanitaryware
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 inline-flex items-center mb-4">
              Connect With Us <ArrowRight className="ml-2" />
            </a>
            <div className="bg-white p-2 rounded-lg shadow-md">
              <QRCode value={whatsappLink} size={128} />
            </div>
            <p className="mt-2 text-sm text-gray-600">Scan to connect on WhatsApp</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white" id="showroom">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Exclusive Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Premium Brands', 'Diverse Selection', 'Complete Solutions'].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-gray-100 p-8 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-700">
                  {index === 0 && "Showcasing top names like Qutone Dimore, Simpolo Nexion, Jaquar, Kohler, and TOTO."}
                  {index === 1 && "Explore our wide variety of Handmade & Moroccan Tiles, Swimming Pool Mosaics, and more."}
                  {index === 2 && "From luxurious Bath Tubs to durable Wooden Flooring and outdoor tiles, we have it all."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100" id="difference">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">The AquaBlue Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Unique Designs', 'Exceptional Service', 'Transparent Pricing'].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white p-8 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                <p className="text-gray-700">
                  {index === 0 && "Our collection features exclusive tile designs you won't find anywhere else. From hand-painted artisanal pieces to cutting-edge 3D tiles, we offer unparalleled variety and creativity."}
                  {index === 1 && "With decades of experience, our team provides expert guidance from concept to completion. We're committed to bringing your vision to life with meticulous attention to detail."}
                  {index === 2 && "We believe in honest, upfront pricing. Our competitive rates are clearly communicated, ensuring no surprises and allowing you to plan your project with confidence."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Tiles', 'Sanitaryware & Fittings'].map((category, index) => (
              <motion.div
                key={category}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?${category.toLowerCase()},bathroom`}
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">{category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="list-disc list-inside space-y-2">
                    {index === 0 ? (
                      <>
                        <li>Qutone Dimore</li>
                        <li>Simpolo Nexion</li>
                        <li>Handmade & Moroccan Tiles</li>
                        <li>Swimming Pool Mosaics</li>
                        <li>Outdoor Tiles (15mm & 20mm)</li>
                      </>
                    ) : (
                      <>
                        <li>Jaquar</li>
                        <li>Kohler</li>
                        <li>TOTO</li>
                        <li>Bath Tubs</li>
                        <li>Shower Enclosures</li>
                        <li>Steam Rooms</li>
                      </>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100" id="partners">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-4 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900 text-white" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Space?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Visit our showroom or connect with us to explore our exquisite collection of bathroom tiles, fittings, and sanitaryware.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 inline-flex items-center">
            Connect Now <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home