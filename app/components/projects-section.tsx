"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/utils/translations"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "App Clima",
    description: "App de previsão de tempo com API",
    link: "https://yassmimalice.github.io/app-clima-api/",
    github: "https://github.com/Yassmimalice/app-clima-api",
    tags: ["API", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Plataforma estudantil",
    description: "Plataforma feita para estudos online",
    link: "https://projetomed.com.br/TECTI/2024/3TIB/grupo3/EstudeAqui/",
    github: "#",
    tags: ["PHP", "MySql", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Landing Page",
    description: "Landing Page/Nexatech",
    link: "https://nexatech-b67w.vercel.app/",
    github: "https://github.com/Yassmimalice/nexatech",
    tags: ["Next.js", "Typescript", "React", "Tailwind"],
  },
]

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-28 px-4 bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400/0 via-purple-400 to-pink-600/0" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600/0 via-pink-600 to-purple-400/0" />

      {/* Glowing orbs */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-pink-600/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-wider font-medium text-pink-600 mb-3"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-400 tracking-tight"
          >
            {t("projects.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glass card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

              <div className="backdrop-blur-sm bg-gray-800/80 rounded-2xl overflow-hidden relative z-10 h-full border border-gray-700 transition-all duration-300 group-hover:border-purple-400/30 shadow-lg shadow-purple-900/10 group-hover:shadow-purple-400/20">
                {/* Top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-pink-600 transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100" />

                <div className="p-7 flex flex-col h-full">
                  <div className="mb-auto">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-5 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-700/50 text-purple-300 text-xs font-medium rounded-full border border-purple-400/10 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-pink-500 hover:text-purple-400 transition-colors px-3 py-2 rounded-lg hover:bg-purple-400/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-pink-500 hover:text-purple-400 transition-colors px-3 py-2 rounded-lg hover:bg-purple-400/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

