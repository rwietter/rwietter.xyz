import React, { FC } from 'react';
import Markdown from 'markdown-to-jsx';

import pretty from 'styles/github-markdown.module.css';
import { ArticleMarkdown, ArticleContainer } from './styles';
import { Properties } from '../ts';

interface ArticleData {
  article: {
    attributes: Pick<Properties, 'content'>;
  }
}

const ArticleContent: FC<ArticleData> = ({ article }) => (
  <ArticleContainer>
    <ArticleMarkdown className={pretty['markdown-body']}>
      <Markdown>
        {article?.attributes?.content}
      </Markdown>
    </ArticleMarkdown>
  </ArticleContainer>
);

export default ArticleContent;
