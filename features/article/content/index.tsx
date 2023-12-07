import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import { ArticleMarkdown, ArticleContainer } from './styles';

interface ArticleData {
  article: any;
}

const ArticleContent: React.FC<ArticleData> = ({ article }) => (
  <ArticleContainer>
    <ArticleMarkdown className={markdownLight['markdown-body']}>
      <ReactMarkdown>
        {article?.attributes?.content}
      </ReactMarkdown>
    </ArticleMarkdown>
  </ArticleContainer>
);

export default ArticleContent;
