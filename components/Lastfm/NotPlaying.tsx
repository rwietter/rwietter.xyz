import { FC } from 'react';
import { BsSpotify } from 'react-icons/bs';
import { MdMusicOff } from 'react-icons/md';
import {
  Playing, PlayingArtist, PlayingSpot,
} from './styles';

export const NotPlaying: FC = () => (
  <Playing>
    <MdMusicOff size={90} color="var(--colors-sub_color)" />
    <PlayingArtist>
      <PlayingSpot>
        <BsSpotify size={19} color="#1DB954" />
        <span className="artist">Not listening to anything</span>
      </PlayingSpot>
    </PlayingArtist>
  </Playing>
);
