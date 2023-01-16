/* eslint-disable no-tabs */
import { BsSpotify } from 'react-icons/bs';
import { FC, useEffect } from 'react';
import { TbPlayerPause } from 'react-icons/tb';
import { prominent } from 'color.js';
import { useColorStore } from 'store/track-color';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  Playing, PlayingImage, PlayingArtist, PlayingSpot,
} from './styles';

const Equalizer = dynamic(() => import('components/equalizer'), { ssr: false });

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
  const { setColors }: any = useColorStore();
  const track: TrackProps = lastFm?.recenttracks?.track[0];
  const image = track?.image[1]['#text'] || track.image[2]['#text'] || track.image[3]['#text'];

  if (!track) return <span />;

  const getImageColors = async () => {
    const colors = await prominent(image, { format: 'hex', amount: 3 });
    setColors(colors);
  };

  useEffect(() => {
    getImageColors();
  }, [image]);

  return (
    <Playing>
      <PlayingImage>
        {image ? (
          <Image quality={100} src={image} alt={track.name} width={90} height={90} />
        ) : (
          <Equalizer />
        )}
      </PlayingImage>
      <PlayingArtist>
        <PlayingSpot>
          <BsSpotify size={19} color="#1DB954" />
          <span>
            {track.artist['#text']}
          </span>
        </PlayingSpot>

        <p className="play">
          <a href={track.url} target="_blank" rel="noreferrer">
            <TbPlayerPause size={19} />
            <strong>{track.name}</strong>
          </a>
        </p>
      </PlayingArtist>
    </Playing>
  );
};
