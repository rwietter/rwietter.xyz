/* eslint-disable no-tabs */
import { BsSpotify } from 'react-icons/bs';
import { FC, useEffect } from 'react';
import { TbPlayerPause } from 'react-icons/tb';
import { prominent } from 'color.js';
import { useColorStore, ColorStore } from 'store/track-color';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import * as S from './styles';
import type { LastFmTrackProps, TrackProps } from './types';

const Equalizer = dynamic(() => import('components/equalizer'), { ssr: false });

export const LastFMTrack: FC<LastFmTrackProps> = ({ lastFm }) => {
  if (!lastFm.recenttracks?.track[0]) return <span />;

  const { setColors } = useColorStore() as ColorStore;
  const track: TrackProps = lastFm?.recenttracks?.track[0];
  const imageUrl = track?.image[3]['#text'] || track?.image[2]['#text'] || track?.image[1]['#text'];

  const getImageColors = async () => {
    const [...colors]: string[] = await prominent(imageUrl, { format: 'hex', amount: 3 }) as string[];
    if (!colors.length) setColors(['#000', '#000', '#000']);
    setColors(colors);
  };

  useEffect(() => {
    getImageColors();
  }, [imageUrl]);

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
          <span>
            {track.artist['#text']}
          </span>
        </S.PlayingSpot>

        <p className="play">
          <a href={track.url} target="_blank" rel="noreferrer">
            <TbPlayerPause size={19} />
            <strong>{track.name}</strong>
          </a>
        </p>
      </S.PlayingArtist>
    </S.Playing>
  );
};
