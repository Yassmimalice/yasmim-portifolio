'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/utils/translations'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'App Clima',
    description: 'App de previsão de tempo com API',
    link: 'https://yassmimalice.github.io/app-clima-api/',
    github: 'https://github.com/Yassmimalice/app-clima-api',
    tags: ['API', 'HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Plataforma estudantil',
    description: 'Plataforma feita para estudos online',
    link: 'https://projetomed.com.br/TECTI/2024/3TIB/grupo3/EstudeAqui/',
    github: '#',
    tags: ['PHP', 'MySql', 'HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Landing Page',
    description: 'Landing Page/Nexatech',
    link: 'https://nexatech-b67w.vercel.app/',
    github: 'https://github.com/Yassmimalice/nexatech',
    tags: ['Next.js', 'Typescript', 'React', 'Tailwind']
  }
]

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400"
        >
          {t('projects.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-75 rounded-xl blur-xl transition-all duration-300 group-hover:opacity-100" />
              <div className="bg-gray-800 rounded-xl overflow-hidden relative z-10 h-full p-6 flex flex-col justify-between border border-purple-400/10 transition-all duration-300 group-hover:border-purple-400/50">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-pink-600 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.github}
                    className="text-pink-600 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}