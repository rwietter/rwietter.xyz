/* eslint-disable no-new */
import React, { type FC } from 'react';

import * as S from './styles';

interface TerminalProps {
  text: string;
}

const Terminal: FC<TerminalProps> = ({ text }) => {
  const handleCopy = () => navigator.clipboard.writeText(text);

  return (
    <S.Terminal>
      <button type="button" onClick={handleCopy}>Copy</button>
      <code>
        {text}
      </code>
    </S.Terminal>
  );
};

export { Terminal };
