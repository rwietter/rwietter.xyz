import Link from 'next/link';
import {
  CardContainer, CardImage, CardInformations, PostTitle,
} from './styles';

const Card = ({ article }: any) => (
  <CardContainer>
    <Link href={`/blog/article/${article?.attributes?.slug}`} passHref>
      <CardImage
        width={2000}
        height={2000}
        loading="lazy"
        placeholder="blur"
        {...article.blurDataURL}
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

export { Card };
