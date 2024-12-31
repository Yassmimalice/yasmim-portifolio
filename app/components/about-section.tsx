'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/utils/translations'
import { Code, Lightbulb, Rocket } from 'lucide-react'

export function AboutSection() {
  const { t } = useTranslation()

  const skills = [
    { 
      icon: Code, 
      title: 'about.skill1.title' as const, 
      description: 'about.skill1.description' as const
    },
    { 
      icon: Lightbulb, 
      title: 'about.skill2.title' as const, 
      description: 'about.skill2.description' as const
    },
    { 
      icon: Rocket, 
      title: 'about.skill3.title' as const, 
      description: 'about.skill3.description' as const
    },
  ] as const;

  return (
    <section className="py-24 px-4 relative bg-gray-800">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
                {t('about.title')}
              </h2>
              <p className="text-gray-100 text-lg leading-relaxed mb-8">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
         
          <div className="order-1 lg:order-2">
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-6 border border-purple-400/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-600 rounded-full p-2 mr-4">
                      <skill.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100">{t(skill.title)}</h3>
                  </div>
                  <p className="text-gray-300">{t(skill.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

