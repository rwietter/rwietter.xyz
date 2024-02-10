'use client'
import { useCallback } from 'react'
import { NextSEO } from 'src/components/SEO'
import { SetupMapper } from 'src/domains/setup/components/setupmapper'
import { Terminal } from 'src/domains/setup/components/terminal'
import { customization } from 'src/domains/setup/data/customization'
import { operationSystem } from 'src/domains/setup/data/so'
import { AUR, NPM, PACMAN, SNAP } from 'src/domains/setup/data/terminal'
import { tools } from 'src/domains/setup/data/tools'
import { useRealTimeSearch } from 'src/domains/setup/hooks/useSearch'

import { Search } from 'src/domains/setup/features/search'
import * as S from 'src/domains/setup/styles'

const Page = () => {
  const { handleInputChange, results } = useRealTimeSearch([
    ...operationSystem,
    ...tools,
    ...customization,
  ])

  const SetupInformation = useCallback(
    () =>
      results.length > 0 ? (
        <SetupMapper title='Search Results' id='results' data={results} />
      ) : (
        <>
          <SetupMapper
            title='Operational System'
            id='desk'
            data={operationSystem}
          />
          <SetupMapper title='Softwares' id='softwares' data={tools} />
          <Terminal text={PACMAN} />
          <Terminal text={AUR} />
          <Terminal text={NPM} />
          <Terminal text={SNAP} />
          <SetupMapper
            title='Customization'
            id='customization'
            data={customization}
          />
        </>
      ),
    [results],
  )

  return (
    <>
      <NextSEO
        title='Setup | Maurício Witter'
        content='website'
        url='https://rwietterc.xyz/setup'
        canonical='https://rwietterc.xyz/blog'
        description='Operational System and Software Development Setup for Development and Productivity.'
        image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
      />
      <S.Main>
        <S.Content>
          <Search handleInputChange={handleInputChange} />
          <SetupInformation />
          <section />
        </S.Content>
      </S.Main>
    </>
  )
}

export default Page
