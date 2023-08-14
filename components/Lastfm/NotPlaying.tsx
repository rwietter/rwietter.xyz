import { FC } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { MdMusicOff } from 'react-icons/md';
import {
  Playing, PlayingImage, PlayingArtist, PlayingSpot,
} from './styles';

export const NotPlaying: FC = () => (
  <Playing>
    <PlayingImage>
      <MdMusicOff size={90} color="var(--colors-sub_color)" />
    </PlayingImage>
    <PlayingArtist>
      <PlayingSpot>
        <BsSpotify size={19} color="#1DB954" />
        <span className="artist">Not listening to anything</span>
      </PlayingSpot>
    </PlayingArtist>
  </Playing>
);
