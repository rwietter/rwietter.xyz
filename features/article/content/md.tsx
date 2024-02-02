import { FC, memo, useEffect } from 'react';
import Markdown from 'react-markdown';
import Prism from 'prismjs';

import md from 'styles/github-markdown.module.css';

interface ArticleData {
  article: string;
}

const MdRenderer: FC<ArticleData> = ({ article }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Markdown
      className={md['markdown-body']}
    >
      {article}
    </Markdown>
  );
};

export default memo(MdRenderer);
