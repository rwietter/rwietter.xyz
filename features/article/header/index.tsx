import Link from 'next/link';
import React, { memo } from 'react';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { RiTimer2Line } from 'react-icons/ri';
import { getLocaleDate } from 'utils/get-locale-date';
import { getReadingTime } from 'utils/getTimeReading';

import * as CSS from './styles';

type ArticleHeaderProps = {
  article: any;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  const { readTime } = getReadingTime(article?.attributes?.content);
  const { localeDate: publishedAt } = getLocaleDate(
    article?.attributes?.publishedAt,
    'pt-BR',
  );
  return (
    <CSS.ArticleHeader>
      <div>
        <CSS.InfoHeader>
          <Link href="/blog">
            <CSS.BackToOverview type="button" aria-label="Back to overview">
              <AiOutlineArrowLeft size={19} aria-hidden="true" />
              <p>Back to overview</p>
            </CSS.BackToOverview>
          </Link>
          <div>
            <CSS.DateTimeRead>
              <AiOutlineCalendar size={17} />
              {publishedAt}
              &nbsp;|&nbsp;
              <RiTimer2Line size={17} />
              {readTime}
            </CSS.DateTimeRead>
          </div>
        </CSS.InfoHeader>
      </div>

      <CSS.ArticleTitle>{article?.attributes?.title}</CSS.ArticleTitle>
      <CSS.ArticleDescription>
        {article?.attributes?.description}
      </CSS.ArticleDescription>
    </CSS.ArticleHeader>
  );
};

export default memo(ArticleHeader);
