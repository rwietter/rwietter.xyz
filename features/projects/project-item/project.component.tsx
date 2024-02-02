/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC, useState } from 'react';
import * as S from './styles';

interface IProject {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    link: string;
    tags: string[];
    icon: () => React.ReactNode;
  };
}

export const ProjectItem: FC<IProject> = ({ project }) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <S.Wrapper
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isBeingHovered && (
        <S.HoverBackground
          layoutId="background"
          layout
        />
      )}
      <S.Container>
        <span>
          <div>{project.icon()}</div>
          <div>
            <S.Title>{project.title}</S.Title>
            <S.Description>{project.description}</S.Description>
          </div>
        </span>
      </S.Container>
    </S.Wrapper>
  );
};
