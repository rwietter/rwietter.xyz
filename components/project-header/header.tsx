/* eslint-disable react/no-unescaped-entities */
import * as S from './styles';

const title = 'projects';
const description = "Selected projects I've worked on in the past.";

export const ProjectHeader = () => (
  <S.Header>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{description}</S.Subtitle>
  </S.Header>
);
