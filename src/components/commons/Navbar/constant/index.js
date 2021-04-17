export const LINKS = (t, ROUTES) => [
  { name: t('navbar.home', 'Home'), route: ROUTES.index },
  { name: t('navbar.aboutUs', 'About Us'), route: ROUTES.aboutUs },
  { name: t('navbar.services', 'Services'), route: ROUTES.services },
]
export const LANGUAGES = [
  { language: 'en', style: 'gb' },
  { language: 'it', style: 'it' },
  { language: 'es', style: 'es' },
  { language: 'de', style: 'de' },
  { language: 'fr', style: 'fr' },
  { language: 'ru', style: 'ru' },
  { language: '中文', style: 'cn' },
]
