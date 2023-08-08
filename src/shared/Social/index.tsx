import { links, SocialLink } from './social-links';

const SidebarSocialIcons = () => (
  <div className="hidden lg:flex justify-start items-center cursor-pointer space-x-5">
    {links.map((link: SocialLink) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noreferrer"
        title={link.name}
        aria-label={link.name}
        className="text-gray-950 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-300"
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export { SidebarSocialIcons };
