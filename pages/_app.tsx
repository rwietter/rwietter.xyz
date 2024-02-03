import dynamic from 'next/dynamic'
import Prism from 'prismjs'
import apolloClient from 'utils/apollo-client'

import { ApolloProvider } from '@apollo/react-hooks'
import { Analytics } from '@vercel/analytics/react'
import { LoadingIndicator } from 'components/Loading'
import { dark, light } from 'features/ui/theme'
import { useEffect } from 'react'
import { useTheme } from 'store/switch-theme'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import type { AppProps } from 'next/app'

import en from 'public/locales/en/en.json'
import pt from 'public/locales/pt/pt.json'

import '../styles/dracula-prism.css'
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
require('prismjs/components/prism-c')

const themes = {
  dark,
  light,
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

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
