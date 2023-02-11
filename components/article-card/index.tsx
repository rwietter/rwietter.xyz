import Link from 'next/link';
import { useState } from 'react';
import {
  CardContainer, CardImage, CardInformations, PostTitle,
} from './styles';

const Card = ({ article }: any) => {
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <CardContainer>
      <Link href={`/blog/article/${article?.attributes?.slug}`} passHref>
        <CardImage
          src={article?.attributes?.image?.data?.attributes?.url}
          alt="Cover image of the article"
          width={2000}
          height={2000}
          loading="lazy"
          bluring={isLoaded}
          onLoadingComplete={() => setIsLoaded(false)}
        />

        <CardInformations>
          <PostTitle>
            {article?.attributes?.title}
          </PostTitle>
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
};

export { Card };
