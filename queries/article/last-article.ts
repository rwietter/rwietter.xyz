import gql from "graphql-tag";

export const LAST_ARTICLE = gql`
query{
  last(sort: "publishedAt:desc", pagination: { limit: 1 }) {
    data {
      id,
      attributes {
        title,
        description
      }
    }
  }
}
`;
