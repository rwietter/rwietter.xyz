import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IoIosTimer } from 'react-icons/io'
import { LocaleLang, getDate } from 'utils/get-date'
import { DateTime } from './styled'

const date = new Date()

const CurrentDate = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language as LocaleLang
  const [currentDate, setCurrentDate] = useState(getDate(date, lang))

  useEffect(() => {
    const interval = setInterval(() => {
      const updateDate = new Date()
      setCurrentDate(getDate(updateDate, lang))
    }, 1000)

    return () => clearInterval(interval)
  }, [lang])

  return (
    <p>
      <IoIosTimer size={18} />
      <DateTime>
        <span>{currentDate ? currentDate : <div />}</span>
      </DateTime>
    </p>
  )
}

export default CurrentDate
