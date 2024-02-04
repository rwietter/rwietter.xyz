import dynamic from 'next/dynamic'
import Prism from 'prismjs'
import apolloClient from 'utils/apollo-client'

import { ApolloProvider } from '@apollo/react-hooks'
import { Analytics } from '@vercel/analytics/react'
import { LoadingIndicator } from 'components/Loading'
import { dark, light } from 'features/ui/theme'
import { useEffect } from 'react'
import { useTheme } from 'store/switch-theme'

import type { AppProps } from 'next/app'

import 'languages/i18n'
import 'utils/highlights'

import '../styles/dracula-prism.css'
import '../styles/shadow-icon.css'
import '../styles/styles.css'

const CommandBar = dynamic(() => import('components/Kbar/command-bar'), {
  ssr: true,
})

const themes = {
  dark,
  light,
}

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const currentTheme = themes[theme]
    const classTheme = document.querySelector('body') as HTMLBodyElement
    classTheme.className = currentTheme
  }, [theme])

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div>
      <CommandBar>
        <LoadingIndicator />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <Analytics />
        </ApolloProvider>
      </CommandBar>
    </div>
  )
}

export default App
