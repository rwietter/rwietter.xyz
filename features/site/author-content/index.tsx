import { LastFMTrack, RecentTrackProps } from 'components/lastfm/lastfm';
import { UpdatedDate } from 'components/update-date';
import { WeatherConditions } from 'components/weather/weather';
import { FC } from 'react';
import { Container, CurrentlyInformations } from './styles';

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
  </Container>
);

export { AuthorContent };
