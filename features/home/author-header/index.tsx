import { SidebarSocialIcons } from 'components/StickyBar/Social'
import { useTranslation } from 'react-i18next'
import { author } from './author'
import { Container, SocialContainer } from './styles'

const AuthorHeader = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <h1>{author.name}</h1>
      <span>@{author.username}</span>
      <h2>{t('author.biography')}</h2>
      <SocialContainer>
        <SidebarSocialIcons />
      </SocialContainer>
    </Container>
  )
}

export default AuthorHeader
