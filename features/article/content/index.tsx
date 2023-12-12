import { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Markdown from 'markdown-to-jsx';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import { ArticleMarkdown, ArticleContainer } from './styles';
import { Properties } from '../ts';

interface ArticleData {
  article: {
    attributes: Pick<Properties, 'content'>;
  }
}

const ArticleContent: FC<ArticleData> = ({ article }) => (
  <ArticleContainer>
    <ArticleMarkdown className={markdownLight['markdown-body']}>
      <Markdown>
        {article?.attributes?.content}
      </Markdown>
    </ArticleMarkdown>
  </ArticleContainer>
);

export default ArticleContent;
