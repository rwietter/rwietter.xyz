/* eslint-disable no-tabs */
import { SpotifyIcon } from 'components/icons/Spotify';
import Image from 'next/image';
import { FC } from 'react';
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

  return (
    <Playing>
      {track ? (
        <>
          <PlayingImage>
            {track.image[0]['#text'] ? (
              <Image
                src={track.image[0]['#text']}
                alt="artist of the playing sound"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src="https://res.cloudinary.com/ddwnioveu/image/upload/v1650762898/photo-1535925191244-17536ca4f8b6_qz4ykc.jpg"
                alt="artist of the playing sound"
                width={100}
                height={100}
              />
            )}
          </PlayingImage>
          <PlayingArtist>
            <SpotifyIcon />
            <p>
              {track.artist['#text']}
              {' '}
              -
              {' '}
              <strong>{track.name}</strong>
            </p>
          </PlayingArtist>
        </>
      ) : (
        <>
          <PlayingImage>
            <Image
              src="https://res.cloudinary.com/ddwnioveu/image/upload/v1650762898/photo-1535925191244-17536ca4f8b6_qz4ykc.jpg"
              alt="artist of the playing sound"
              width={90}
              height={90}
            />
          </PlayingImage>
          <PlayingArtist>
            <SpotifyIcon />
            <p>
              Not listening
              {' '}
              <span>to anything</span>
            </p>
          </PlayingArtist>
        </>
      )}
    </Playing>
  );
};
