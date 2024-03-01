import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob('../locales/*.y(a)?ml', { eager: true })
  ).map(([key, value]) => {
    const yaml = key.endsWith('.yaml')
    return [key.slice(11, yaml ? -5 : -4), value.default]
  })
)
const envLocale: string =
  <string>import.meta.env.VITE_I18N_LOCALE || 'en'
const envFallbackLocale: string =
  <string>import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en'

export const i18n = createI18n({
  locale: envLocale,
  fallbackLocale: envFallbackLocale,
  messages
})
