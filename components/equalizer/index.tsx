import {
  EqualizerBar, DelayShort, DelayLong, DelayReallyLong, EqualizerContainer,
} from './styles';

const Equalizer = () => (
  <EqualizerContainer>
    <EqualizerBar />
    <DelayShort />
    <DelayLong />
    <DelayReallyLong />
  </EqualizerContainer>
);

export { Equalizer };
