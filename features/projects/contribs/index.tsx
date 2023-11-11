/* eslint-disable no-use-before-define */
import { useState } from 'react';
import { ContribProps, projects } from './data';
import * as S from './styles';

export const Contribs = () => (
  <S.Container>
    <S.Title>Contribuições com open-source</S.Title>
    {Object.keys(projects).sort((a, b) => Number(b) - Number(a)).map((year) => (
      <S.ContribContainer
        key={year}
      >
        <S.Year>{year}</S.Year>
        <S.List>
          {projects[year].map((contrib: ContribProps) => (
            <ContribComponent
              key={contrib.title}
              title={contrib.title}
              type={contrib.type}
              url={contrib.url}
            />
          ))}
        </S.List>
      </S.ContribContainer>
    ))}
  </S.Container>
);

const ContribComponent = (props: ContribProps) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <S.ListItem
      key={props.title}
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      {isBeingHovered && (
        <S.HoverBackground
          layoutId="background"
          layout
        />
      )}
      <S.ListItemName
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className='tag'>{props.type}</span>
        <strong>{props.title}</strong>
      </S.ListItemName>
    </S.ListItem>
  );
};
