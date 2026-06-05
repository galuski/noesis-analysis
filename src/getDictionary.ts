import 'server-only'

const dictionaries = {
  en: () => import('./locales/en').then((module) => module.default),
  es: () => import('./locales/es').then((module) => module.default),
  it: () => import('./locales/it').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // אם השפה חוקית נשתמש בה, אחרת נחזיר אנגלית
  const safeLocale = dictionaries[locale as keyof typeof dictionaries] ? locale : 'en';
  return dictionaries[safeLocale as keyof typeof dictionaries]();
}