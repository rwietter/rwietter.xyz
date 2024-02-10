import Link from 'next/link'
import { SocialLink, links } from './social-links'
// import { Link, SocialContainer } from './styles'
import styles from './styles.module.css'

const SidebarSocialIcons = () => (
  <div className={`${styles.socialContainer} social`}>
    {links.map((link: SocialLink) => (
      <Link
        className={styles.link}
        key={link.url}
        href={link.url}
        target='_blank'
        rel='noreferrer'
        title={link.name}
        aria-label={link.name}
      >
        {link.icon}
      </Link>
    ))}
  </div>
)

export { SidebarSocialIcons }
