import { SetupData } from '../types/setup-data';

export const tools: SetupData[] = [
  {
    name: 'Operating System',
    url: 'https://archlinux.org/download/',
    type: 'Arch Linux',
  },
  {
    name: 'Window Manager',
    url: 'https://wiki.archlinux.org/title/awesome',
    type: 'AwesomeWM',
  },
  {
    name: 'Browser',
    url: 'https://aur.archlinux.org/packages/google-chrome-dev',
    type: 'Google Chrome (AUR)',
  },
  {
    name: 'Cron',
    url: 'https://archlinux.org/packages/core/x86_64/cronie/',
    type: 'Cronie',
  },
  {
    name: 'Docker',
    url: 'https://archlinux.org/packages/extra/x86_64/docker/',
    type: 'Docker Engine',
  },
  {
    name: 'Docker Buildx',
    url: 'https://archlinux.org/packages/extra/x86_64/docker-compose/',
    type: 'Docker Compose',
  },
  {
    name: 'Shell ',
    url: 'https://archlinux.org/packages/extra/x86_64/zsh/',
    type: 'ZSH',
  },
  {
    name: 'Terminal ',
    url: 'https://archlinux.org/packages/extra/x86_64/wezterm/',
    type: 'Wezterm',
  },
  {
    name: 'Network Stats',
    url: 'https://archlinux.org/packages/extra/x86_64/vnstat/',
    type: 'Vnstat',
  },
  {
    name: 'Git Manager',
    url: 'https://archlinux.org/packages/extra/x86_64/tig/',
    type: 'Tig',
  },
  {
    name: 'Status Bar',
    url: 'https://archlinux.org/packages/extra/x86_64/dzen2/',
    type: 'Dzen2',
  },
  {
    name: 'Code Editor',
    url: 'https://aur.archlinux.org/packages/visual-studio-code-bin',
    type: 'Vscode',
  },
];
