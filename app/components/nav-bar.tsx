'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useTranslation, NAV_ITEMS } from '@/utils/translations'

export function NavBar() {
  const { language, setLanguage } = useLanguage()
  const { getNavText } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">YA</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-gray-100 hover:text-pink-600 transition-colors"
              whileHover={{ y: -2 }}
            >
              {getNavText(item)}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-400/20 transition-colors"
          >
            <Globe className="w-5 h-5 text-pink-600" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-400/20 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-pink-600" />
            ) : (
              <Menu className="w-5 h-5 text-pink-600" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-gray-800 rounded-lg overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="block px-4 py-2 text-gray-100 hover:bg-purple-400/20 hover:text-pink-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {getNavText(item)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

