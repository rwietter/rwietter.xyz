/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Header, Title } from './styles';

interface PageTitleProps {
  title: string;
  color?: 'primary' | 'secondary';
}

const PageTitle: FC<PageTitleProps> = ({ title, color }) => (
  <Header>
    <Title color={color}>{title}</Title>
  </Header>
);

export { PageTitle };
