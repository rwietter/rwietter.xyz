'use client'
import Link from 'next/link'
import React, { memo } from 'react'
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai'
import { RiTimer2Line } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

import { getLocaleDate } from 'utils/get-locale-date'
import { getReadingTime } from 'utils/getTimeReading'
import { Attributes } from '../ts'
import styles from './styles.module.css'

interface ArticleHeaderData {
  article: Attributes
}

type Langs = {
  [key: string]: string
}

const langs: Langs = {
  en: 'en-US',
  pt: 'pt-BR',
}

const ArticleHeader: React.FC<ArticleHeaderData> = (props) => {
  const { readTime } = getReadingTime(props.article?.attributes?.content)
  const { t, i18n } = useTranslation()

  const { localeDate: publishedAt } = getLocaleDate(
    props.article?.attributes?.publishedAt,
    langs[i18n.language],
  )

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.infoHeader}>
          <Link href='/blog'>
            <button
              className={styles.backToOverview}
              type='button'
              aria-label='Back to overview'
            >
              <AiOutlineArrowLeft size={19} aria-hidden='true' />
              <p>{t('backToOverview')}</p>
            </button>
          </Link>
          <div>
            <p className={styles.dateTimeRead}>
              <AiOutlineCalendar size={17} />
              {publishedAt}
              &nbsp;|&nbsp;
              <RiTimer2Line size={17} />
              {readTime}
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.articleTitle}>
        {props.article?.attributes?.title}
      </h1>
      <p className={styles.articleDescription}>
        {props.article?.attributes?.description}
      </p>
    </section>
  )
}

export default memo(ArticleHeader)
