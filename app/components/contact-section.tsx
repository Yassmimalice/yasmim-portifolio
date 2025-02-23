"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Instagram, Github, Send } from "lucide-react"
import { useTranslation } from "@/utils/translations"

export function ContactSection() {
  const { t } = useTranslation()
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus("success")
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
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
            {t("contact.title")}
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t("contact.description")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-gray-100 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-gray-100 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-gray-100 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2.5 text-gray-100 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="w-full px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {formStatus === "loading" ? t("contact.form.sending") : t("contact.form.submit")}
              </button>
              {formStatus === "success" && (
                <p className="text-green-400 text-center">{t("contact.form.successMessage")}</p>
              )}
              {formStatus === "error" && <p className="text-red-400 text-center">{t("contact.form.errorMessage")}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-white mb-4">{t("contact.letsConnect")}</h3>
            <p className="text-gray-400 mb-8">{t("contact.letsConnectDescription")}</p>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-2">{t("contact.emailMe")}</h4>
              <a
                href="mailto:yassmimalice@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                yassmimalice@gmail.com
              </a>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-4">{t("contact.followMe")}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/yasmimaliceteixeira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/Yassmimalice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/yazzmimalice/profilecard/?igsh=cWZ4aGp1dnN6eDh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:yassmimalice@gmail.com"
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <p className="text-gray-400 text-sm">{t("contact.availability")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

