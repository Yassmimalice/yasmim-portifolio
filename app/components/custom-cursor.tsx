'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      setIsPointer(window.getComputedStyle(target as Element).cursor === 'pointer')
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateCursorType)
    }
  }, [position.x, position.y])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-4 h-4 rounded-full bg-white" />
      </motion.div>
    </>
  )
}

