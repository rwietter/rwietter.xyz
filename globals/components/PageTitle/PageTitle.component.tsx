/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Header, Title } from './styles';

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <Header>
    <Title>{title}</Title>
  </Header>
);

export { PageTitle };
