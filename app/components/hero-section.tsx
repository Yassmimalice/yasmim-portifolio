'use client'

import { motion } from 'framer-motion'
import { Code, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/utils/translations'

const styles = {
  radialGradient: {
    background: 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.1) 0%, rgba(236, 72, 153, 0.1) 25%, transparent 50%)',
  },
} as const

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 via-transparent to-pink-600/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-400/10 via-transparent to-pink-600/10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-transparent" 
               style={{ transform: 'skewY(-12deg)', transformOrigin: 'top left' }} />
          <div className="absolute inset-0 bg-gradient-to-l from-pink-600/5 to-transparent" 
               style={{ transform: 'skewY(12deg)', transformOrigin: 'top right' }} />
        </div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={styles.radialGradient} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm"
        >
          <Code className="w-4 h-4 text-pink-600" />
          <span className="text-pink-600 font-medium">{t('hero.subtitle')}</span>
          <Sparkles className="w-4 h-4 text-pink-600" />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          {t('hero.title')}{' '}
          <span className="text-gray-100">Yasmim Alice</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          {t('hero.description')}
        </p>

        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-medium text-gray-100 bg-purple-400 bg-opacity-20
                     hover:bg-opacity-30 transition-all duration-300"
          >
            {t('hero.cta.work')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-gray-900 px-8 py-3 rounded-full font-medium
                     hover:bg-opacity-80 transition-all duration-300"
          >
            {t('hero.cta.contact')}
          </motion.button>
        </div>

        <div className="mt-16">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-pink-600 rounded-full mx-auto"
          >
            <div className="w-1 h-1 bg-pink-600 rounded-full mx-auto mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}