/* eslint-disable consistent-return */
import { useRouter } from 'next/router';
import React from 'react';
import { Articles } from 'components/articles';
import Query from 'components/query';
import CATEGORY_ARTICLES_QUERY from 'queries/category/articles';
import { useQuery } from '@apollo/react-hooks';

const Category = () => {
  const router = useRouter();
  const { data } = useQuery(CATEGORY_ARTICLES_QUERY, { variables: { slug: router.query.slug } });
  console.log(data.categories);
  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={router.query.slug}>
      {({ data: { categories } }: any) => {
        if (categories.data.length) {
          return (
            <div>
              <div>
                <div>
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles articles={categories.data[0].attributes.articles.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Category;
