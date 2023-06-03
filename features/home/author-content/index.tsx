import { KbarInit } from 'components/Kbar';
import { LastFMTrack } from 'components/Lastfm';
import type { RecentTrackProps } from 'components/Lastfm/types';
import { WeatherConditions } from 'components/Weather';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Container, CurrentlyInformations } from './styles';

const CurrentDate = dynamic(() => import('components/CurrentDate'), { ssr: false });

export interface AuthorContentProps {
  lastFm: RecentTrackProps;
  weather: any;
}

const AuthorContent: FC<AuthorContentProps> = ({ lastFm, weather }) => (
  <Container>
    <CurrentlyInformations>
      <CurrentDate />
      <WeatherConditions weather={weather} />
    </CurrentlyInformations>
    <LastFMTrack lastFm={lastFm} />
    <KbarInit />
  </Container>
);

export { AuthorContent };
