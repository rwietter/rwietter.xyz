export type ProjectItem = {
    title: string;
    description: string;
    github: string;
}
type Projects = {
    [key: string]: ProjectItem[];
};

export const projects: Projects = {
  2022: [
    {
      title: 'Trackd',
      description: 'Trackd é uma plataforma para gestão de agenda odontológica para UBS.',
      github: 'https://github.com/rwietter/trackrow-monorepo',
    },
  ],
  2021: [
    {
      title: 'Illusion Theme',
      description: 'A fork of Dracula Official, Illusion is a dark theme for Visual Studio Code.',
      github: 'https://github.com/rwietter/illusion-vscode-theme',
    },
    {
      title: 'PrettySQL',
      description: 'Permite formatar baixar um screenshot do código de forma simples e rápida.',
      github: 'https://github.com/rwietter/pretty-sql',
    },
  ],
  2020: [
    {
      title: 'My Awesome',
      description: 'Crie suas anotações, listas favoritas e compartilhe com seus amigos.',
      github: 'https://github.com/rwietter/my-awesome',
    },
    {
      title: 'EcoNext',
      description: 'Conectar empresas e pessoas para auxiliar no descarte de resíduos orgânicos e inorgânicos.',
      github: 'https://github.com/rwietter/econext',
    },
  ],
};
