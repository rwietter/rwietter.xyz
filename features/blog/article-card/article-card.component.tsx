import Link from 'next/link';
import Image from 'next/image';
import * as S from './styles';

const ArticleCard = ({ article }: any) => {
  const {
    slug, title, description, category, image,
  } = article.attributes;

  return (
    <S.CardContainer>
      <Link href={`/blog/article/${slug}`} passHref>
        {image?.data?.attributes?.url ? (
          <Image
            width={320}
            height={190}
            style={{ objectFit: 'cover', borderRadius: '10px' }}
            loading="lazy"
            placeholder="blur"
            {...article.blurDataURL}
          />
        ) : (
          <span />
        )}

        <S.CardInformations>
          <S.PostTitle>{title}</S.PostTitle>
          <h2 id="description">{description}</h2>
          {category.data?.attributes?.name ? (
            <h3 id="category">
              #
              {category.data?.attributes?.name}
            </h3>
          ) : (
            <span />
          )}
        </S.CardInformations>
      </Link>
    </S.CardContainer>
  );
};

export { ArticleCard };
