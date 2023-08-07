'use client';

import React, { PropsWithChildren } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from 'utils/apollo-client';

type Props = PropsWithChildren<{}>;

export const ApolloClientProvider: React.FC<Props> = ({
  children,
}) => <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
