import { useLanguage } from "@/contexts/language-context"

// Define the navigation items and their translations explicitly
const navTranslations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
} as const

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.subtitle": "Front-end Developer",
    "hero.title": "Hi, I'm",
    "hero.description": "I create engaging and responsive web experiences using modern technologies.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Contact Me",

    "about.title": "About Me",
    "about.description":
      "My name is Yasmim Alice, I have a degree in Information Technology and I work as a front-end developer. I work with various technologies and frameworks to create modern, responsive and functional web interfaces, providing the best experience for users.",
    "about.button": "Learn More",
    "about.skill1.title": "Front-end Developer",
    "about.skill1.description": "I am a front-end developer working mainly with Next.js, React and Typescript",
    "about.skill2.title": "Creative Problem Solving",
    "about.skill2.description": "Innovative solutions for complex challenges",
    "about.skill3.title": "Performance Optimization",
    "about.skill3.description": "Development of fast and efficient web applications",

    "skills.title": "Skills",
    "skills.description": "Here are some of the key skills I bring to every project:",
    "skills.frontend.title": "Front-end Development",
    "skills.frontend.description": "Building responsive and interactive user interfaces with React and Next.js",
    "skills.ui.title": "UI Architecture",
    "skills.ui.description": "Creating scalable and maintainable component structures",
    "skills.animation.title": "Animation & Interaction",
    "skills.animation.description": "Crafting smooth animations and micro-interactions",
    "skills.performance.title": "Performance Optimization",
    "skills.performance.description": "Ensuring fast load times and smooth user experiences",
    "skills.responsive.title": "Responsive Design",
    "skills.responsive.description": "Creating layouts that work beautifully across all devices",
    "skills.uiux.title": "UI/UX Implementation",
    "skills.uiux.description": "Translating designs into pixel-perfect interfaces",
    "skills.frameworks.title": "Modern Frameworks",
    "skills.frameworks.description": "Expertise in React, Next.js, and modern web technologies",
    "skills.state.title": "State Management",
    "skills.state.description": "Managing complex application state effectively",

    "projects.title": "Projects",
    "projects.subtitle": "Portfolio",
    "projects.viewLive": "Live",
    "projects.viewCode": "Code",

    "testimonials.title": "Testimonials",
    "testimonials.description": "What people say about working with me",
    "testimonials.client1.name": "João Silva",
    "testimonials.client1.role": "Tech Lead",
    "testimonials.client1.company": "TechCorp",
    "testimonials.client1.content":
      "Yasmim delivered exceptional results. Her attention to detail and technical expertise made our project a success.",
    "testimonials.client2.name": "Maria Santos",
    "testimonials.client2.role": "Product Manager",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.content":
      "Working with Yasmim was a pleasure. She brings creativity and technical excellence to every project.",
    "testimonials.client3.name": "Pedro Costa",
    "testimonials.client3.role": "CEO",
    "testimonials.client3.company": "StartupBR",
    "testimonials.client3.content":
      "Outstanding work! Yasmim's ability to understand our needs and deliver high-quality solutions exceeded our expectations.",

    "contact.title": "Get in Touch",
    "contact.description": "Have a question or want to work together?",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your Name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "How can I help you?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message here...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.successMessage": "Your message has been sent successfully!",
    "contact.form.errorMessage": "There was an error sending your message. Please try again.",
    "contact.connectTitle": "Connect With Me",
    "contact.locationTitle": "Location",
    "contact.location": "São Paulo, Brazil",
    "contact.availabilityTitle": "Availability",
    "contact.availability": "Open for freelance opportunities",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub",
    "contact.emailMe": "Email Me At",
    "contact.followMe": "Follow Me",
    "contact.letsConnect": "Let's Connect",
    "contact.letsConnectDescription":
      "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    techStack: "Tech Stack",
    "contact.connect": "Connect",
    "contact.schedule": "Schedule a Call",
  },
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    "hero.subtitle": "Desenvolvedora Front-end",
    "hero.title": "Olá, eu sou",
    "hero.description": "Eu crio experiências web envolventes e responsivas usando tecnologias modernas.",
    "hero.cta.work": "Ver Meu Trabalho",
    "hero.cta.contact": "Contate-me",

    "about.title": "Sobre Mim",
    "about.description":
      "Meu nome é Yasmim Alice, sou formada em Tecnologia da Informação e atuo como desenvolvedora front-end. Trabalho com diversas tecnologias e frameworks para criar interfaces web modernas, responsivas e funcionais, proporcionando a melhor experiência para os usuários.",
    "about.button": "Saiba Mais",
    "about.skill1.title": "Desenvolvedora Front-end",
    "about.skill1.description":
      "Sou desenvolvedora front-end trabalhando principalmente com Next.js, React e Typescript",
    "about.skill2.title": "Resolução Criativa de Problemas",
    "about.skill2.description": "Soluções inovadoras para desafios complexos",
    "about.skill3.title": "Otimização de Performance",
    "about.skill3.description": "Desenvolvimento de aplicações web rápidas e eficientes",

    "skills.title": "Habilidades",
    "skills.description": "Aqui estão algumas das principais habilidades que trago para cada projeto:",
    "skills.frontend.title": "Desenvolvimento Front-end",
    "skills.frontend.description": "Construindo interfaces responsivas e interativas com React e Next.js",
    "skills.ui.title": "Arquitetura de UI",
    "skills.ui.description": "Criando estruturas de componentes escaláveis e sustentáveis",
    "skills.animation.title": "Animação e Interação",
    "skills.animation.description": "Desenvolvendo animações suaves e micro-interações",
    "skills.performance.title": "Otimização de Performance",
    "skills.performance.description": "Garantindo tempos de carregamento rápidos e experiências suaves",
    "skills.responsive.title": "Design Responsivo",
    "skills.responsive.description": "Criando layouts que funcionam perfeitamente em todos os dispositivos",
    "skills.uiux.title": "Implementação de UI/UX",
    "skills.uiux.description": "Transformando designs em interfaces pixel-perfect",
    "skills.frameworks.title": "Frameworks Modernos",
    "skills.frameworks.description": "Experiência em React, Next.js e tecnologias web modernas",
    "skills.state.title": "Gerenciamento de Estado",
    "skills.state.description": "Gerenciando estado de aplicações complexas de forma eficiente",

    "projects.title": "Projetos",
    "projects.subtitle": "Portfólio",
    "projects.viewLive": "Ver Projeto",
    "projects.viewCode": "Ver Código",

    "testimonials.title": "Depoimentos",
    "testimonials.description": "O que as pessoas dizem sobre trabalhar comigo",
    "testimonials.client1.name": "João Silva",
    "testimonials.client1.role": "Tech Lead",
    "testimonials.client1.company": "TechCorp",
    "testimonials.client1.content":
      "Yasmim entregou resultados excepcionais. Sua atenção aos detalhes e expertise técnica fizeram nosso projeto um sucesso.",
    "testimonials.client2.name": "Maria Santos",
    "testimonials.client2.role": "Gerente de Produto",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.content":
      "Trabalhar com a Yasmim foi um prazer. Ela traz criatividade e excelência técnica para cada projeto.",
    "testimonials.client3.name": "Pedro Costa",
    "testimonials.client3.role": "CEO",
    "testimonials.client3.company": "StartupBR",
    "testimonials.client3.content":
      "Trabalho excepcional! A capacidade da Yasmim de entender nossas necessidades e entregar soluções de alta qualidade superou nossas expectativas.",

    "contact.title": "Entre em Contato",
    "contact.description": "Tem uma pergunta ou quer trabalhar junto?",
    "contact.form.name": "Nome",
    "contact.form.namePlaceholder": "Seu Nome",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "seu@email.com",
    "contact.form.subject": "Assunto",
    "contact.form.subjectPlaceholder": "Como posso ajudar?",
    "contact.form.message": "Mensagem",
    "contact.form.messagePlaceholder": "Sua mensagem aqui...",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.successMessage": "Sua mensagem foi enviada com sucesso!",
    "contact.form.errorMessage": "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
    "contact.connectTitle": "Conecte-se Comigo",
    "contact.locationTitle": "Localização",
    "contact.location": "São Paulo, Brasil",
    "contact.availabilityTitle": "Disponibilidade",
    "contact.availability": "Aberta para oportunidades freelance",
    "contact.phone": "Telefone",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.instagram": "Instagram",
    "contact.github": "GitHub",
    "contact.emailMe": "Me envie um email",
    "contact.followMe": "Me siga",
    "contact.letsConnect": "Vamos nos Conectar",
    "contact.letsConnectDescription":
      "Estou sempre aberta para discutir novos projetos, ideias criativas ou oportunidades para fazer parte das suas visões.",
    techStack: "Stack Tecnológica",
    "contact.connect": "Conectar",
    "contact.schedule": "Agendar uma Chamada",
  },
} as const

export type NavItem = keyof typeof navTranslations.en
export const NAV_ITEMS: NavItem[] = ["home", "about", "projects", "contact"]

type TranslationKey = keyof typeof translations.en

export function useTranslation() {
  const { language } = useLanguage()

  function t(key: TranslationKey): string {
    return translations[language][key]
  }

  function getNavText(item: NavItem): string {
    return navTranslations[language][item]
  }

  return { t, getNavText }
}

