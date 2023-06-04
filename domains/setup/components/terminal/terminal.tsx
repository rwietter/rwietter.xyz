/* eslint-disable no-new */
import React, { useEffect, type FC } from 'react';

import * as S from './styles';

interface TerminalProps {
  text: string;
}

const Terminal: FC<TerminalProps> = ({ text }) => {
  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        }
      });
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const showNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Great', {
        body: 'Your text has been copied to the clipboard.',
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showNotification();
  };

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
