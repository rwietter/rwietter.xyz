import { format } from 'date-fns'

export const getDate = (date: Date): string | null => {
  const formatDate = `${format(date, "dd'rd' MMMM yyyy")} • ${format(
    date,
    'HH:mm:ss a',
  )}`
  return formatDate || null
}
