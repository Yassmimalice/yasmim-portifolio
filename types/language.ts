export type Language = 'en' | 'pt'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

