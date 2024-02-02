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

import '../styles/blockquote-highlight.css'
import '../styles/one-dark.css'
import '../styles/shadow-icon.css'
import '../styles/styles.css'

const CommandBar = dynamic(() => import('components/Kbar/command-bar'), {
  ssr: true,
})

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-css')
require('prismjs/components/prism-rust')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')

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
    Prism.highlightAll()
  }, [theme])

  return (
    <div className='fade-in-layout'>
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
