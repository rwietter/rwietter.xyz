import Link from 'next/link';
import { RiTimer2Line } from 'react-icons/ri';
import { getReadingTime } from 'utils/getTimeReading';
import { getLocaleDate } from 'utils/get-locale-date';
import { TfiPencil } from 'react-icons/tfi';
import * as S from './styles';

const ArticleCard = ({ article }: any) => {
  const {
    slug, title, description, publishedAt,
  } = article.attributes;

  const { readTime } = getReadingTime(article?.attributes?.content);
  const { localeDate } = getLocaleDate(publishedAt, 'pt-BR');

  return (
    <>
      <S.CardContainer>
        <Link href={`/blog/article/${slug}`} passHref suppressHydrationWarning>
          <S.CardInformations>
            <S.PostTitle>
              {'## '}
              {title}
            </S.PostTitle>
            <S.LocalTimeContainer>
              <S.DateTimeRead>
                <TfiPencil size={17} />
                {localeDate}
                &nbsp;|&nbsp;
                <RiTimer2Line size={17} />
                {readTime}
              </S.DateTimeRead>
            </S.LocalTimeContainer>
            <p id="description">
              {description}
            </p>
            <S.ReadMore>Read More »</S.ReadMore>
          </S.CardInformations>
        </Link>
      </S.CardContainer>
      <S.Divider />
    </>
  );
};

export { ArticleCard };
