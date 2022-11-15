/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import { VscLinkExternal } from 'react-icons/vsc';
import * as S from './styles';

interface IProject {
	project: {
		title: string;
		description: string;
		image: string;
		github: string;
		link: string;
		tags: string[];
		inverse: boolean;
	};
}

export const Project: FC<IProject> = ({ project }) => (
  <S.Container key={project.link}>
    {!project.inverse && (
    <S.Icon>
      <img
          alt={`${project.description} image`}
          src={project.image}
      />
    </S.Icon>
		)}
    <S.Description>
      <S.Featured>Featured Project</S.Featured>
      <S.TitleProject>{project.title}</S.TitleProject>
      <S.DescriptionProject>{project.description}</S.DescriptionProject>
      <S.Tags>
        {project.tags.map((tag) => (
          <S.Tag key={tag}>{tag}</S.Tag>
				))}
      </S.Tags>
      <S.Buttons>
        <S.Button href={project.github} target="_blank" rel="canonical">
          <BsGithub size={22} />
        </S.Button>
        <S.Button href={project.link} rel="canonical">
          <VscLinkExternal size={22} />
        </S.Button>
      </S.Buttons>
    </S.Description>
    {project.inverse && (
    <S.Icon>
      <img
        src={project.image}
        alt={project.description}
      />
    </S.Icon>
		)}
  </S.Container>
);
