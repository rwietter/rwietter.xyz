import { KbarInit } from 'components/kbar-init-shortcut';
import { LastFMTrack, RecentTrackProps } from 'components/lastfm/lastfm';
import { WeatherConditions } from 'components/weather/weather';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Container, CurrentlyInformations } from './styles';

const UpdatedDate = dynamic(() => import('components/update-date'), { ssr: false });

export interface AuthorContentProps {
  lastFm: RecentTrackProps;
  weather: any;
}

const AuthorContent: FC<AuthorContentProps> = ({ lastFm, weather }) => (
  <Container>
    <CurrentlyInformations>
      <UpdatedDate />
      <WeatherConditions weather={weather} />
    </CurrentlyInformations>
    <LastFMTrack lastFm={lastFm} />
    <KbarInit />
  </Container>
);

export default AuthorContent;
