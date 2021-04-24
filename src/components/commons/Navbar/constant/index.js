export const LINKS = (t, ROUTES) => [
  { name: t('navbar.home', 'Home'), route: ROUTES.index },
  { name: t('navbar.aboutUs', 'About Us'), route: ROUTES.aboutUs },
  { name: t('navbar.services', 'Services'), route: ROUTES.services },
]
export const LANGUAGES = [
  { language: 'en', value: 'gb' },
  { language: 'it', value: 'it' },
  { language: 'es', value: 'es' },
  { language: 'de', value: 'de' },
  { language: 'fr', value: 'fr' },
  { language: 'ru', value: 'ru' },
  { language: '中文', value: 'cn' },
]
