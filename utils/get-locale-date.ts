export const getLocaleDate = (date: string, locale: string) => {
  const publishedAt = new Date(date).toLocaleDateString(locale);

  return { localeDate: publishedAt };
};
