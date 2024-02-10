import { SidebarSocialIcons } from 'src/components/StickyBar/Social'
// import { useTranslation } from 'react-i18next'
import { author } from './author'
import styles from './styles.module.css'

const AuthorHeader = () => {
  // const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{author.name}</h1>
      <span className={styles.username}>@{author.username}</span>
      <h2 className={styles.biography}>{author.biography}</h2>
      {/* <h2>{t('home.author-biography')}</h2> */}
      <div className={styles.socialContainer}>
        <SidebarSocialIcons />
      </div>
    </section>
  )
}

export default AuthorHeader
