/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import { ArticleMarkdown, ArticleContainer } from './styles';
import { Properties } from '../ts';

const MdRenderer = dynamic(() => import('features/article/content/md'), {
  ssr: true,
});

interface ArticleData {
  article: {
    attributes: Pick<Properties, 'content'>;
  }
}

const ArticleContent: FC<ArticleData> = ({ article }) => (
  <ArticleContainer>
    <ArticleMarkdown>
      <MdRenderer article={article.attributes.content} />
    </ArticleMarkdown>
  </ArticleContainer>
);

export default ArticleContent;
