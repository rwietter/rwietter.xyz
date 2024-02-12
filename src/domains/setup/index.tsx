'use client'
import { useCallback } from 'react'
import { customization } from 'src/domains/setup/data/customization'
import { operationSystem } from 'src/domains/setup/data/so'
import { tools } from 'src/domains/setup/data/tools'
import { useRealTimeSearch } from 'src/domains/setup/hooks/useSearch'

import { SearchResults } from 'src/domains/setup/components/SearchResults'
import { StaticSetup } from 'src/domains/setup/components/StaticSetup'
import { Search } from 'src/domains/setup/components/search'

const Setup = () => {
  const { handleInputChange, results } = useRealTimeSearch([
    ...operationSystem,
    ...tools,
    ...customization,
  ])

  const SetupInformation = useCallback(() => {
    return results.length > 0 ? (
      <SearchResults results={results} />
    ) : (
      <StaticSetup />
    )
  }, [results])

  return (
    <>
      <Search handleInputChange={handleInputChange} />
      <SetupInformation />
    </>
  )
}

export default Setup
