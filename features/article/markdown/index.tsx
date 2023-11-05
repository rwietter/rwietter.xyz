import { type FC } from 'react';
import MarkdownElement from 'react-markdown';
import markdownLight from 'styles/github-markdown-css-light.module.css';
import * as S from './styles';

type MarkdownProps = {
  article: any;
}

const Markdown: FC<MarkdownProps> = ({ article }) => (
  <S.Article>
    <S.ArticleMarkdown className={markdownLight['markdown-body']}>
      <MarkdownElement>{article?.attributes?.content}</MarkdownElement>
    </S.ArticleMarkdown>
  </S.Article>
);

export default Markdown;
