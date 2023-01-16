import { ReactNode } from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export type ColorName = 'twitter' | 'linkedIn' | 'github';

export type SocialLink = {
  icon: ReactNode;
  url: string;
  name: string;
  color: ColorName;
}

export type SocialLinks = SocialLink[];

export const links: SocialLinks = [
  {
    icon: <AiOutlineTwitter size={23} />,
    url: 'https://twitter.com/rwietter',
    name: 'Twitter',
    color: 'twitter',
  },
  {
    icon: <AiFillLinkedin size={23} />,
    url: 'https://www.linkedin.com/in/euiciowr/',
    name: 'LinkedIn',
    color: 'linkedIn',
  },
  {
    icon: <AiFillGithub size={23} />,
    url: 'https://github.com/rwietter',
    name: 'GitHub',
    color: 'github',
  },
];
