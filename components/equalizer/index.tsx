import React from 'react';

import {
  EqualizerBar, DelayShort, DelayLong, DelayReallyLong, EqualizerContainer,
} from './styles';

const Equalizer: React.FC = () => (
  <EqualizerContainer>
    <EqualizerBar />
    <DelayShort />
    <DelayLong />
    <DelayReallyLong />
  </EqualizerContainer>
);

export { Equalizer };
