import { SOCIAL_LINKS } from 'data/social-links';
import { SocialContainer } from './styles';

const SidebarSocialIcons = () => (
  <SocialContainer>
    {SOCIAL_LINKS.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        title={link.name}
        aria-label={link.name}
      >
        {link.icon}
      </a>
    ))}
  </SocialContainer>
);

export { SidebarSocialIcons };
