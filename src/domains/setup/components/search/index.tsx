import { type ChangeEvent, type FC } from 'react'
import styles from './styles.module.css'

interface SearchProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<SearchProps> = ({ handleInputChange }) => {
  return (
    <section className={styles.searchContent}>
      <nav>
        <a href='#desk'>#Desk</a>
        <a href='#softwares'>#Softwares</a>
        <a href='#customization'>#Customization</a>
      </nav>

      <div className={styles.inputSearch}>
        <span className={styles.description}>Pesquise por um item</span>
        <input
          type='text'
          onChange={handleInputChange}
          placeholder='Ex: vscode theme'
        />
      </div>
    </section>
  )
}
export { Search }
