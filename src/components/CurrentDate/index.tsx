'use client'
import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { IoIosTimer } from 'react-icons/io'
import { LocaleLang, getDate } from 'utils/get-date'
import styles from './styles.module.css'

const date = new Date()

const CurrentDate = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language as LocaleLang
  const [currentDate, setCurrentDate] = useState(getDate(date, lang))

  return (
    <p className={styles.date}>
      <IoIosTimer size={18} />
      <time className={styles.dateTime}>
        <span className={styles.current}>
          {currentDate ? currentDate : <div />}
        </span>
      </time>
    </p>
  )
}

export default CurrentDate
