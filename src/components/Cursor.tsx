import React from 'react'
import { motion } from 'framer-motion'

interface CursorProps {
  position: { x: number; y: number }
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.div 
      className="fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        restDelta: 0.001
      }}
    >
      <motion.div 
        className="absolute inset-1 bg-blue-500 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      ></motion.div>
    </motion.div>
  )
}

export default Cursor