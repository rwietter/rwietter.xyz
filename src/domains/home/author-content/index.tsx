import { fetcherLastFm, fetcherWeather } from 'services'
import CurrentDate from 'src/components/CurrentDate'
import { LastFMTrack } from 'src/components/Lastfm'
import type { RecentTrackProps } from 'src/components/Lastfm/types'
import { WeatherConditions } from 'src/components/Weather'
import styles from './styles.module.css'

export interface AuthorContentProps {
  lastFm: RecentTrackProps
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  weather: any
}

async function getData() {
  const [weather, lastfm] = await Promise.all([
    fetcherWeather(),
    fetcherLastFm(),
  ])

  return { data: { weather, lastfm } }
}

const AuthorContent = async () => {
  const { data } = await getData()

  return (
    <section className={styles.container}>
      <div className={styles.currentlyInformation}>
        <CurrentDate />
        <WeatherConditions weather={data.weather} />
      </div>
      <LastFMTrack lastFm={data.lastfm} />
    </section>
  )
}

export default AuthorContent
