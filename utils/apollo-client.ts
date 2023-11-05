/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, InMemoryCache, type NormalizedCacheObject } from '@apollo/client';
// import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

// const link = new HttpLink({
//   uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
// });

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
  cache,
});

export default apolloClient;
