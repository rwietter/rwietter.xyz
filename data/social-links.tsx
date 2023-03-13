import { ReactNode } from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiSubstack } from 'react-icons/si';

export type ColorName = 'twitter' | 'linkedIn' | 'github' | 'substack';

export type SocialLink = {
  icon: ReactNode;
  url: string;
  name: string;
  color: ColorName;
}

export type SocialLinks = SocialLink[];

export const links: SocialLinks = [
  {
    icon: <AiFillLinkedin size={23} />,
    url: 'https://www.linkedin.com/in/euiciowr/',
    name: 'LinkedIn',
    color: 'linkedIn',
  },
  {
    icon: <SiSubstack size={19} />,
    url: 'https://rwietter.substack.com/',
    name: 'Substack',
    color: 'substack',
  },
  {
    icon: <AiFillGithub size={23} />,
    url: 'https://github.com/rwietter',
    name: 'GitHub',
    color: 'github',
  },
  {
    icon: <AiOutlineTwitter size={23} />,
    url: 'https://twitter.com/rwietter',
    name: 'Twitter',
    color: 'twitter',
  },
];
