export type ContribProps = {
    title: string;
    url: string;
    type: 'ISSUE' | 'PR' | 'PAPER';
}
type Contribs = {
    [key: string]: ContribProps[];
};

export const projects: Contribs = {
  2023: [
    {
      title: 'adiciona uma função de hash para gerar o id do card',
      url: 'https://github.com/levxyca/diciotech/pull/136',
      type: 'PR',
    },
    {
      title: 'adiciona Interface de Linha de Comando (CLI) para criar novos conceitos',
      url: 'https://github.com/levxyca/diciotech/pull/112',
      type: 'PR',
    },
    {
      title: 'código renderizado em uma única linha e falta de recuo (indentação)',
      url: 'https://github.com/levxyca/diciotech/issues/113',
      type: 'ISSUE',
    },
    {
      title: 'automação de criação de novos termos e resolução de colisões na geração de IDs',
      url: 'https://github.com/levxyca/diciotech/issues/100',
      type: 'ISSUE',
    },
  ],
};
