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
      value: 'yassmimalicee@gmail.com', 
      href: 'mailto:yassmimalicee@gmail.com',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: Linkedin, 
      title: 'contact.linkedin', 
      value: 'linkedin.com/in/yasmimaliceteixeira', 
      href: 'www.linkedin.com/in/yasmimaliceteixeira',
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

        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative flex items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-gray-100 font-semibold text-lg mb-2">
                      {t(item.title)}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

