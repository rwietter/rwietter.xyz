import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          description
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

const LAST_ARTICLES_QUERY = gql`
  query Articles {
    articles(pagination: { limit: 3 }, sort: "updatedAt:desc") {
      data {
        attributes {
          slug
          title
          description
          updatedAt
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

export { ARTICLES_QUERY, LAST_ARTICLES_QUERY };
