import { ReactNode } from 'react'
import styles from './styles.module.css'

type ResultItemProps = {
  action: {
    name: string
    shortcut: string[] | undefined
    icon: ReactNode
  }
  active: boolean
}

export const ResultItem = ({ action }: ResultItemProps) => (
  <div className={styles.box}>
    <div className={styles.action}>
      {action.icon}
      <span>{action.name}</span>
    </div>
    {action.shortcut?.length ? (
      <div className={styles.shortcut} aria-hidden>
        {action.shortcut.map((shortcut: string) => (
          <kbd className={styles.kbd} key={shortcut}>
            {shortcut}
          </kbd>
        ))}
      </div>
    ) : null}
  </div>
)
