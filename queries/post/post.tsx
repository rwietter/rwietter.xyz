import gql from 'graphql-tag';

export const POST_QUERY = gql`
  query Post($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          content
          description
          writer {
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
        }
      }
    }
  }
`;
