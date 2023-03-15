/* eslint-disable no-tabs */
import { BsSpotify } from 'react-icons/bs';
import type { FC } from 'react';
import { TbPlayerPause } from 'react-icons/tb';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import * as S from './styles';
import type { LastFmTrackProps, TrackProps } from './types';

const Equalizer = dynamic(() => import('components/equalizer'), { ssr: false });

export const LastFMTrack: FC<LastFmTrackProps> = ({ lastFm }) => {
  if (!lastFm.recenttracks?.track[0]) return <span />;

  const track: TrackProps = lastFm?.recenttracks?.track[0];
  const imageUrl = track?.image[3]['#text'] || track?.image[2]['#text'] || track?.image[1]['#text'];

  return (
    <S.Playing>
      <S.PlayingImage>
        {imageUrl ? (
          <Image quality={100} src={imageUrl} alt={track.name} width={90} height={90} />
        ) : (
          <Equalizer />
        )}
      </S.PlayingImage>
      <S.PlayingArtist>
        <S.PlayingSpot>
          <BsSpotify size={19} color="#1DB954" />
          <span className="artist">
            {track.artist['#text']}
          </span>
        </S.PlayingSpot>

        <p className="play">
          <a href={track.url} target="_blank" rel="noreferrer">
            <TbPlayerPause size={19} />
            <strong className="song">{track.name}</strong>
          </a>
        </p>
      </S.PlayingArtist>
    </S.Playing>
  );
};
