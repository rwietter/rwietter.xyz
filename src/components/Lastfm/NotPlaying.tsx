import { FC } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { MdMusicOff } from 'react-icons/md'
import styles from './styles.module.css'

export const NotPlaying: FC = () => (
  <div className={styles.playing}>
    <MdMusicOff size={90} color='var(--colors-sub_color)' />
    <div className={styles.playingArtist}>
      <div className={styles.playingSpot}>
        <BsSpotify size={19} color='#1DB954' />
        <span className='artist'>Not listening to anything</span>
      </div>
    </div>
  </div>
)