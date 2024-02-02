import { LastFMTrack } from 'components/Lastfm'
import type { RecentTrackProps } from 'components/Lastfm/types'
import { WeatherConditions } from 'components/Weather'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import * as S from './styles'

const CurrentDate = dynamic(() => import('components/CurrentDate'), {
  ssr: false,
})

export interface AuthorContentProps {
  lastFm: RecentTrackProps
  weather: any
}

const AuthorContent: FC<AuthorContentProps> = ({ lastFm, weather }) => (
  <S.Container>
    <S.CurrentlyInformations>
      <CurrentDate />
      <WeatherConditions weather={weather} />
    </S.CurrentlyInformations>
    <LastFMTrack lastFm={lastFm} />
  </S.Container>
)

export { AuthorContent }
