import { DiVisualstudio } from 'react-icons/di'
import { GrSpotify } from 'react-icons/gr'
import { IoPieChartSharp } from 'react-icons/io5'
import { SiAwesomelists, SiDuckduckgo, SiPostgresql } from 'react-icons/si'
import { TbBookmarksFilled } from 'react-icons/tb'
import { TfiAgenda } from 'react-icons/tfi'

export const topProjects = [
  {
    title: 'Trackd',
    description:
      'Trackd é uma plataforma para gestão de agenda odontológica para UBS.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/trackrow-monorepo',
    link: 'https://github.com/rwietter/trackrow-monorepo',
    tags: ['React', 'Next', 'TypeScript', 'Postgres', 'Rest API'],
    icon: <TfiAgenda size={18} />,
  },
  {
    title: 'Illusion Theme',
    description:
      'A fork of Dracula Official, Illusion is a dark theme for Visual Studio Code.',
    image: 'https://i.imgur.com/Hw1Y1Oy.png',
    github: 'https://github.com/rwietter/illusion-vscode-theme',
    link: 'https://github.com/rwietter/illusion-vscode-theme',
    tags: ['VsCode', 'Theme', 'TypeScript'],
    icon: <DiVisualstudio size={24} />,
  },
  {
    title: 'PrettySQL',
    description:
      'Pretty SQL é uma aplicação web que permite formatar e colorir o código SQL de forma simples e rápida.',
    image: 'https://i.imgur.com/dV4ogUC.png',
    github: 'https://github.com/rwietter/pretty-sql',
    link: 'https://github.com/rwietter/pretty-sql',
    tags: ['Next', 'TypeScript'],
    icon: <SiPostgresql size={24} />,
  },
  {
    title: 'My Awesome',
    description:
      'Crie suas anotações, listas favoritas e compartilhe com seus amigos.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/my-awesome',
    link: 'https://github.com/rwietter/my-awesome',
    tags: ['Next', 'TypeScript', 'Redis', 'Postgres'],
    icon: <SiAwesomelists size={24} />,
  },
  {
    title: 'Illusion Spicetify',
    description: 'A dark theme for Spotify, using Spicetify.',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/illusion-spicetify',
    link: 'https://github.com/rwietter/illusion-spicetify',
    tags: ['Toml', 'CSS', 'Spicetify'],
    icon: <GrSpotify size={22} />,
  },
  {
    title: 'Breview',
    description:
      'A desktop application to navigate and show your bookmarks in a pretty way like mega.nz',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/breview',
    link: 'https://github.com/rwietter/breview',
    tags: ['Rust', 'Next', 'React', 'SQLite'],
    icon: <TbBookmarksFilled size={22} />,
  },
  {
    title: 'Covid Insights',
    description:
      'Pretty charts and insights about the Covid-19 pandemic in Brazil',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/covid-19-insights',
    link: 'https://github.com/rwietter/covid-19-insights',
    tags: ['Next', 'TypeScript', 'GraphQL', 'Mongo', 'Docker'],
    icon: <IoPieChartSharp size={22} />,
  },
  {
    title: 'Findit',
    description:
      'A command-line tool to advanced search in your favorite search engine',
    image: 'https://i.imgur.com/SkEcNJj.jpg',
    github: 'https://github.com/rwietter/findit',
    link: 'https://github.com/rwietter/findit',
    tags: ['Rust', 'CLI', 'DuckDuckGo'],
    icon: <SiDuckduckgo size={22} />,
  },
]
