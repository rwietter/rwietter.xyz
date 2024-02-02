import {
  ApolloClient,
  InMemoryCache,
  type NormalizedCacheObject,
} from '@apollo/client'

const cache = new InMemoryCache()

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
  cache,
})

export default apolloClient
