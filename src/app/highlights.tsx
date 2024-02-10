'use client'

import Prism from 'prismjs'
import apolloClient from 'utils/apollo-client'

import { ApolloProvider } from '@apollo/react-hooks'
import { FC, PropsWithChildren, useEffect } from 'react'

import 'languages/i18n'
import 'utils/highlights'

// const themes = {
//   dark,
//   light,
// }

type HighlightsProps = PropsWithChildren

const Highlights: FC<HighlightsProps> = ({ children }) => {
  // const { theme } = useTheme()

  // useEffect(() => {
  //   const currentTheme = themes[theme]
  //   const classTheme = document.querySelector('body')

  //   if (classTheme) classTheme.className = currentTheme

  //   return () => {
  //     if (classTheme) classTheme.className = ''
  //   }
  // }, [theme])

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </>
  )
}

export { Highlights }