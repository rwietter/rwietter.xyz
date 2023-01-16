/* eslint-disable no-tabs */
import { TfiAgenda } from 'react-icons/tfi';
import { DiVisualstudio } from 'react-icons/di';
import { SiMysql, SiAwesomelists } from 'react-icons/si';
import { GiEcology } from 'react-icons/gi';

export const projects = [
  {
    title: 'Trackd',
    description:
			'Trackd é uma plataforma para gestão de agenda odontológica para UBS.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/trackrow-monorepo',
    link: 'https://github.com/rwietter/trackrow-monorepo',
    tags: ['React', 'Next', 'TypeScript', 'Postgres', 'Rest API'],
    icon: () => <TfiAgenda size={18} color="var(--colors-gray50)" />,
  },
  {
    title: 'IllusionTheme',
    description:
			'A fork of Dracula Official, Illusion is a dark theme for Visual Studio Code.',
    image: 'https://i.imgur.com/Hw1Y1Oy.png',
    github: 'https://github.com/rwietter/illusion-vscode-theme',
    link: 'https://github.com/rwietter/illusion-vscode-theme',
    tags: ['VsCode', 'Theme', 'TypeScript'],
    icon: () => <DiVisualstudio size={24} color="var(--colors-gray50)" />,
  },
  {
    title: 'PrettySQL',
    description:
			'Pretty SQL é uma aplicação web que permite formatar e colorir o código SQL de forma simples e rápida.',
    image: 'https://i.imgur.com/dV4ogUC.png',
    github: 'https://github.com/rwietter/pretty-sql',
    link: 'https://github.com/rwietter/pretty-sql',
    tags: ['Next', 'TypeScript'],
    icon: () => <SiMysql size={24} color="var(--colors-gray50)" />,
  },
  {
    title: 'MyAwesome',
    description:
			'Crie suas anotações, listas favoritas e compartilhe com seus amigos.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/my-awesome',
    link: 'https://github.com/rwietter/my-awesome',
    tags: ['Next', 'TypeScript', 'Redis', 'Postgres'],
    icon: () => <SiAwesomelists size={24} color="var(--colors-gray50)" />,
  },
  {
    title: 'EcoNext',
    description:
			'EcoNext visa conectar entidades, empresas e pessoas para auxiliar no descarte de resíduos orgânicos e inorgânicos.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/econext',
    link: 'https://github.com/rwietter/econext',
    tags: ['Next', 'TypeScript', 'Rest API', 'Postgres'],
    icon: () => <GiEcology size={22} color="var(--colors-gray50)" />,
  },
];
