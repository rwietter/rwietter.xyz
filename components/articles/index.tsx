/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { Card } from '../article-card';
import { ArticlesContainer } from './styles';

const Articles = ({ articles }: any) => {
  const leftArticlesCount = Math.ceil(articles?.length / 5);

  const leftArticles = articles?.slice(0, leftArticlesCount);

  const rightArticles = articles?.slice(leftArticlesCount, articles.length);

  return (
    <ArticlesContainer>
      <div>
        {leftArticles?.map((article: any) => (
          <Card
            article={article}
            key={`article__${article.attributes.slug}`}
          />
        ))}
      </div>
      <div>
        <div>
          {rightArticles?.map((article: any) => (
            <Card
              article={article}
              key={`article__${article.attributes.slug}`}
            />
          ))}
        </div>
      </div>
    </ArticlesContainer>
  );
};

export { Articles };
