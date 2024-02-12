import { type FC } from 'react'

import styles from './styles.module.css'

interface SetupMapperProps {
  title: string
  id: string
  data: any
}

const SetupMapper: FC<SetupMapperProps> = ({ data, title, id }) => (
  <div className={styles.setupMapperContainer}>
    <h2 id={id}>{title}</h2>
    <ul>
      {data?.map((item: any) => (
        <li key={item.name}>
          <a
            className={styles.softwareLink}
            href={item.url}
            target='_blank'
            rel='noreferrer'
          >
            <span>{item.name}</span>: {item.type}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export { SetupMapper }
