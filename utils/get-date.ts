import { format } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'

const supportedLocales = {
  en: enUS,
  pt: ptBR,
}

export type LocaleLang = 'en' | 'pt'

export const getDate = (date: Date, locale: LocaleLang): string | null => {
  const lang = supportedLocales[locale] || supportedLocales.pt

  const localeIndexedLoockup = {
    en: () =>
      `${format(date, "dd'rd' MMMM yyyy", {
        locale: lang,
      })} • ${format(date, 'HH:mm:ss a', { locale: lang })}`,
    pt: () =>
      `${format(date, 'dd MMMM yyyy', {
        locale: lang,
      })} • ${format(date, 'HH:mm:ss a', { locale: lang })}`,
  }

  return localeIndexedLoockup[locale] ? localeIndexedLoockup[locale]() : null
}
