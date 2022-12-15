import Link from 'next/link';
import React from 'react';
import {
  CardContainer, CardImage, CardInformations,
} from './styles';

const Card = ({ article }: any) => (
  <CardContainer>
    <Link href={`/blog/article/${article?.attributes?.slug}`} passHref>
      <CardImage
        src={article?.attributes?.image?.data?.attributes?.url}
        alt="Cover image of the article"
        width={2000}
        height={2000}
        loading="lazy"
      />

      <CardInformations>
        <h1 id="title">
          {article?.attributes?.title}
        </h1>
        <h2 id="description">
          {article?.attributes?.description}
        </h2>
        {article?.attributes?.category?.data?.attributes?.name && (
        <h3 id="category">
          #
          {article?.attributes?.category?.data?.attributes?.name}
        </h3>
        )}
      </CardInformations>
    </Link>
  </CardContainer>
);

export { Card };
