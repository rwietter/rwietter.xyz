'use client';

import { useKBar } from 'kbar';
import { KbarButton, KbarContainer } from './styles';

const KbarInit = () => {
  const kbar = useKBar();

  const handleOpenKbar = () => kbar.query.toggle();

  return (
    <KbarContainer>
      <KbarButton type="button" onClick={handleOpenKbar}>
        Press
        {' '}
        <code>ctrl</code>
        {' '}
        <code>Space</code>
        {' '}
        to start →
      </KbarButton>
    </KbarContainer>
  );
};

export { KbarInit };
