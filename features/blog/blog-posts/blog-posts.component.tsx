/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import { ArticleCard } from 'features/blog/article-card';
import * as S from './styles';

const BlogPosts = ({ articles }: any) => {
  const leftArticlesCount = Math.ceil(articles?.length / 5);
  // const leftArticles = articles?.slice(0, leftArticlesCount);
  // const rightArticles = articles?.slice(leftArticlesCount, articles.length);

  return (
    <S.ArticlesContainer>
      {articles?.map((article: any) => (
        <ArticleCard
          article={article}
          key={`article__${article.attributes.slug}`}
        />
      ))}
      {/* </section> */}
      {/* <section>
        {rightArticles?.map((article: any) => (
          <Card
            article={article}
            key={`article__${article.attributes.slug}`}
          />
        ))}
      </section> */}
    </S.ArticlesContainer>
  );
};

export { BlogPosts };
