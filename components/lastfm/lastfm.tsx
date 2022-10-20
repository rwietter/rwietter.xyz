/* eslint-disable no-tabs */
import { SpotifyIcon } from 'components/icons/Spotify';
import { FC } from 'react';
import { Equalizer } from 'components/equalizer';
import { BsFillPlayFill } from 'react-icons/bs';
import { Playing, PlayingImage, PlayingArtist } from './styles';

export interface RecentTrackProps {
	recenttracks: {
		track: {
			artist: {
				'#text': string;
			};
			image: {
				'size': string;
				'#text': string;
			}[];
			name: string;
			url: string;
		}[];
	};
}

interface TrackProps {
	artist: {
		'#text': string;
	};
	image: {
		'size': string;
		'#text': string;
	}[];
	name: string;
	url: string;
}

export interface LastFmTrackProps {
	lastFm: RecentTrackProps;
}

export const LastFMTrack: FC<LastFmTrackProps> = ({ lastFm }) => {
  const track: TrackProps = lastFm?.recenttracks?.track[0];
  const image = track?.image[1]['#text'] || track.image[2]['#text'] || track.image[3]['#text'];

  if (!track) return <span />;

  return (
    <Playing>
      <PlayingImage>
        {image ? (
          <img src={image} alt={track.name} width="100px" />
        ) : (
          <Equalizer />
        )}
      </PlayingImage>
      <PlayingArtist>
        <div>
          <SpotifyIcon />
          <p>
            {track.artist['#text']}
          </p>
        </div>
        <p className="play">
          <a href={track.url} target="_blank" rel="noreferrer">
            <BsFillPlayFill size={24} />
            <strong>{track.name}</strong>
          </a>
        </p>
      </PlayingArtist>
    </Playing>
  );
};
