'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react'
import { useTranslation } from '@/utils/translations'

export function ContactSection() {
  const { t } = useTranslation()

  const contactInfo = [
    { 
      icon: Mail, 
      title: 'contact.email', 
      value: 'yassmimalice@gmail.com', 
      href: 'mailto:yassmimalice@gmail.com',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: Linkedin, 
      title: 'contact.linkedin', 
      value: 'linkedin.com/in/yasmimaliceteixeira', 
      href: 'https://www.linkedin.com/in/yasmimaliceteixeira',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Instagram, 
      title: 'contact.instagram', 
      value: '@yazzmimalice', 
      href: 'https://www.instagram.com/yazzmimalice/profilecard/?igsh=cWZ4aGp1dnN6eDh4',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Github, 
      title: 'contact.github', 
      value: 'github.com/yasmimalice', 
      href: 'https://github.com/Yassmimalice',
      color: 'from-gray-700 to-gray-900'
    }
  ] as const

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="py-24 px-4 relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex flex-col items-start h-full">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-100 font-semibold text-lg mb-2">
                  {t(item.title)}
                </h3>
                <p className="text-purple-300 text-sm font-medium mb-4">
                  {item.value}
                </p>
                <div className="mt-auto flex items-center text-purple-400 text-sm font-semibold">
                  <span className="mr-2">{t('contact.connect')}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            {t('contact.availability')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            {t('contact.schedule')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

