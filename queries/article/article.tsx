import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          content
          description
          author {
            data {
              attributes {
                name
              }
            }
          }
          publishedAt
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export interface LastArticles {
  data: [
    {
      attributes: {
        slug: string;
        title: string;
        description: string;
        updateAt: string;
        category: {
          data: {
            attributes: {
              name: string;
              slug: string;
            }
          }
        }
        image: {
          data: {
            attributes: {
              url: string;
            }
          }
        }
      }
    }
  ];
}

export default ARTICLE_QUERY;
