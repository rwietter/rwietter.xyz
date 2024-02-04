import { useKBar } from 'kbar'
import { Trans, useTranslation } from 'react-i18next'
import { KbarButton, KbarContainer } from './styles'

const KbarInit = () => {
  const kbar = useKBar()
  const { t } = useTranslation()

  const handleOpenKbar = () => kbar.query.toggle()

  return (
    <KbarContainer>
      <KbarButton type='button' onClick={handleOpenKbar}>
        <Trans i18nKey='home.kbar-shortcut' t={t}>
          Press &nbsp;
          <code>ctrl</code>
          &nbsp;+&nbsp;
          <code>space</code>
          &nbsp; to start →
        </Trans>
      </KbarButton>
    </KbarContainer>
  )
}

export { KbarInit }
