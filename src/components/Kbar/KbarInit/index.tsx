'use client'

import { useKBar } from 'kbar'
import { Trans, useTranslation } from 'react-i18next'
import styles from './styles.module.css'

const KbarInit = () => {
  const kbar = useKBar()
  const { t } = useTranslation()

  const handleOpenKbar = () => kbar.query.toggle()

  return (
    <div className={styles.kbarContainer}>
      <button
        className={styles.kbarButton}
        type='button'
        onClick={handleOpenKbar}
      >
        <Trans i18nKey='home.kbar-shortcut' t={t}>
          Press &nbsp;
          <code>ctrl</code>
          &nbsp;+&nbsp;
          <code>space</code>
          &nbsp; to start →
        </Trans>
      </button>
    </div>
  )
}

export { KbarInit }
