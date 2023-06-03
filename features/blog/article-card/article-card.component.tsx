import Link from 'next/link';
import * as S from './styles';

const ArticleCard = ({ article }: any) => {
  const {
    slug, title, description, category,
  } = article.attributes;
  return (
    <S.CardContainer>
      <Link href={`/blog/article/${slug}`} passHref>
        <S.CardImage
          width={2000}
          height={2000}
          loading="lazy"
          placeholder="blur"
          {...article.blurDataURL}
        />

        <S.CardInformations>
          <S.PostTitle>{title}</S.PostTitle>
          <h2 id="description">{description}</h2>
          {category.data?.attributes?.name ? (
            <h3 id="category">
              #
              {category.data?.attributes?.name}
            </h3>
          ) : <span />}
        </S.CardInformations>
      </Link>
    </S.CardContainer>
  );
};

export { ArticleCard };
