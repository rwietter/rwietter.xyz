import { KBarResults, useDeepMatches } from 'kbar'
import { ResultItem } from './ResultItem'
import styles from './styles.module.css'

const RenderResults = () => {
  const { results } = useDeepMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className={styles.groupname}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

export { RenderResults }
