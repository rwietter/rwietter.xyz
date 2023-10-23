/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { ReactNode, memo } from 'react';
import { useRouter } from 'next/router';
import {
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarResults,
  Action as KBarAction,
} from 'kbar';
import { CiLink } from 'react-icons/ci';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiHome3Line } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BiCodeCurly } from 'react-icons/bi';
import { SlHeart, SlSocialGithub, SlSocialTwitter } from 'react-icons/sl';
import { SiSubstack } from 'react-icons/si';
import { TbBrandTelegram } from 'react-icons/tb';
import {
  Positioner, Action, Animator, GroupName, Kbd, Search, Shortcut, Box,
} from './styles';

type ResultItemProps = {
  action: {
    name: string;
    shortcut: string[] | undefined;
    icon: ReactNode;
  };
  active: boolean;
};

const ResultItem = ({ action }: ResultItemProps) => (
  <Box>
    <Action>
      {action.icon}
      <span>
        {action.name}
      </span>
    </Action>
    {action.shortcut?.length ? (
      <Shortcut aria-hidden>
        {action.shortcut.map((shortcut: string) => (
          <Kbd key={shortcut}>{shortcut}</Kbd>
        ))}
      </Shortcut>
    ) : null}
  </Box>
);

const RenderResults = () => {
  const { results } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => (typeof item === 'string' ? (
        <GroupName>{item}</GroupName>
      ) : (
        <ResultItem action={item} active={active} />
      ))}
    />
  );
};

type Props = {
  children: ReactNode;
};

const CommandBar = ({ children }: Props) => {
  const router = useRouter();

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const actions: KBarAction[] = [
    {
      id: 'Copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <CiLink size={22} color="var(--colors-gray50)" />,
    },
    {
      id: 'Contact',
      name: 'Contact',
      shortcut: ['e'],
      keywords: 'contact',
      section: 'General',
      perform: () => router.push('/contact'),
      icon: <MdOutlineAlternateEmail size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <RiHome3Line size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'go-blog',
      section: 'Go To',
      perform: () => router.push('/blog'),
      icon: <SlHeart size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'About',
      name: 'About',
      shortcut: ['a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <RxPerson size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <BiCodeCurly size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'GitHub',
      name: 'GitHub',
      shortcut: ['g'],
      keywords: 'github',
      section: 'Social',
      perform: () => window.open('https://github.com/rwietter', '_blank'),
      icon: <SlSocialGithub size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Substack',
      name: 'Substack',
      shortcut: ['s'],
      keywords: 'substack',
      section: 'Social',
      perform: () => window.open('https://rwietter.substack.com/', '_blank'),
      icon: <SiSubstack size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Twitter',
      name: 'Twitter',
      shortcut: ['t'],
      keywords: 'twitter',
      section: 'Social',
      perform: () => window.open('https://twitter.com/rwietter', '_blank'),
      icon: <SlSocialTwitter size={18} color="var(--colors-gray50)" />,
    },
    {
      id: 'Telegram',
      name: 'Telegram',
      shortcut: ['c'],
      keywords: 'telegram',
      section: 'Social',
      perform: () => window.open('https://t.me/rwietter', '_blank'),
      icon: <TbBrandTelegram size={18} color="var(--colors-gray50)" />,
    },
  ];

  return (
    <KBarProvider
      actions={actions}
      options={{
        toggleShortcut: 'Control+Space',
        enableHistory: true,
      }}
    >
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search placeholder="Type a command or search…" />
            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
};

export default memo(CommandBar);
