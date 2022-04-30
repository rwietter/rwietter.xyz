import Link from 'next/link';
import React from 'react';
import {
  CardContainer, CardImage, CardInformations, CardImageContainer,
} from './styles';

const Card = ({ article }: any) => (
  <Link href={`/blog/article/${article.attributes.slug}`} passHref>
    <CardContainer>
      <CardImageContainer>
        <CardImage
          src={article.attributes.image.data.attributes.url}
          alt={article.attributes.image.url}
          layout="fixed"
          width={70}
          height={70}
          loading="lazy"
        />
      </CardImageContainer>

      <CardInformations>
        <p id="title">
          {article.attributes.title}
        </p>
        <p id="description">
          {article.attributes.description}
        </p>
        {/* <p id="category">
          {article.attributes.category.data.attributes.name}
        </p> */}
      </CardInformations>
    </CardContainer>
  </Link>
);

export { Card };
