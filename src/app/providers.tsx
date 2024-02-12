'use client'

import { ApolloProvider } from '@apollo/react-hooks'
import { PropsWithChildren } from 'react'
import CommandBar from 'src/components/Kbar/CommandBar'
import apolloClient from 'utils/apollo-client'

import 'languages/i18n'

type Props = PropsWithChildren

export default function Providers({ children }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <CommandBar>{children}</CommandBar>
    </ApolloProvider>
  )
}
