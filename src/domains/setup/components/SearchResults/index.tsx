'use client'

import { SetupMapper } from 'src/domains/setup/components/setupmapper'

const SearchResults = ({ results }: any) => (
  <SetupMapper title='Search Results' id='results' data={results} />
)

export { SearchResults }
