import gql from 'graphql-tag'

export const POSTS_QUERY = gql`
  query Posts {
    posts {
      data {
        attributes {
          slug
          title
          content
          description
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
`
