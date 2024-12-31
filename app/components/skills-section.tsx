'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Layout, Sparkles, Zap, Monitor, Laptop, Boxes } from 'lucide-react'
import { useTranslation } from '@/utils/translations'

const skills = [
  {
    icon: Code2,
    title: 'skills.frontend.title',
    description: 'skills.frontend.description'
  },
  {
    icon: Layout,
    title: 'skills.ui.title',
    description: 'skills.ui.description'
  },
  {
    icon: Sparkles,
    title: 'skills.animation.title',
    description: 'skills.animation.description'
  },
  {
    icon: Zap,
    title: 'skills.performance.title',
    description: 'skills.performance.description'
  },
  {
    icon: Monitor,
    title: 'skills.responsive.title',
    description: 'skills.responsive.description'
  },
  {
    icon: Palette,
    title: 'skills.uiux.title',
    description: 'skills.uiux.description'
  },
  {
    icon: Laptop,
    title: 'skills.frameworks.title',
    description: 'skills.frameworks.description'
  },
  {
    icon: Boxes,
    title: 'skills.state.title',
    description: 'skills.state.description'
  }
] as const

export function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
            {t('skills.title')}
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-2xl group relative overflow-hidden hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <skill.icon className="w-12 h-12 mb-4 text-pink-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">{t(skill.title)}</h3>
                <p className="text-gray-300">{t(skill.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}