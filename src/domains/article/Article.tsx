'use client';

import React from 'react';
import { useTheme } from 'store/switch-theme';

import ReactMarkdown from 'react-markdown';

import markdownLight from 'styles/github-markdown-css-light.module.css';
import markdownDark from 'styles/github-markdown-css-dark.module.css';

type Props = {
  article: any;
}

const ArticleContent: React.FC<Props> = ({ article }) => {
  const { theme } = useTheme();
  return (
    <article className="pt-10 text-lg text-gray-950">
      <ReactMarkdown
        className={
          theme === 'light'
            ? markdownDark['markdown-body']
            : markdownLight['markdown-body']
        }
      >
        {article?.attributes?.content}
      </ReactMarkdown>
    </article>
  );
};

export default ArticleContent;
