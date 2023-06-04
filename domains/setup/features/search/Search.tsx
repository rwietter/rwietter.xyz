/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import type { ChangeEvent, FC } from 'react';
import * as S from './styles';

interface SearchProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ handleInputChange }) => (
  <S.SearchContent>
    <nav>
      <a href="#desk">#Desk</a>
      <a href="#softwares">#Softwares</a>
      <a href="customization">#Customization</a>
    </nav>

    <S.InputSearch>
      <S.Description>Pesquise por um item</S.Description>
      <input type="text" onChange={handleInputChange} placeholder="Ex: vscode theme" />
    </S.InputSearch>
  </S.SearchContent>
);
export { Search };
