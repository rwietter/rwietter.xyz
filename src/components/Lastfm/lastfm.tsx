import type { FC } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { TbPlayerPause, TbPlayerStop } from 'react-icons/tb'
import styles from './styles.module.css'
import type { LastFmTrackProps, TrackProps } from './types'
import Image from 'next/image'

export const LastFMTrack: FC<LastFmTrackProps> = ({ lastFm }) => {
  const track: TrackProps = lastFm?.recenttracks?.track[0]

  if (!track) return <span />

  const isPlaying = track['@attr']?.nowplaying === 'true'
  const imageUrl = track.image[3]['#text']

  return (
    <div className={styles.playing}>
      {imageUrl ? (
        <Image
          fetchPriority='high'
          rel='preload'
          quality={60}
          alt={track.name}
          src={imageUrl}
          width={90}
          height={90}
        />
      ) : (
        <span />
      )}
      <div className={styles.playingArtist}>
        <div className={styles.playingSpot}>
          <BsSpotify size={19} color='#1DB954' />
          <span className={styles.artist}>{track.artist['#text']}</span>
        </div>

        <p className={styles.play}>
          <a href={track.url} target='_blank' rel='noreferrer'>
            {isPlaying ? (
              <TbPlayerPause size={19} />
            ) : (
              <TbPlayerStop size={19} />
            )}
            <strong className={styles.song}>{track.name}</strong>
          </a>
        </p>
      </div>
    </div>
  )
}
