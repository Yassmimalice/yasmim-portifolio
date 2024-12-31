'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/utils/translations'

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

export function TechStack() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-4 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-400"
        >
          {t('techStack')}
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center hover:shadow-lg hover:shadow-pink-600/10 transition-all duration-300"
            >
              <div className="w-16 h-16 relative mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="object-contain relative z-10"
                />
              </div>
              <span className="text-sm text-gray-100 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}