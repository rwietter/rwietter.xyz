'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import { useTheme } from 'store/switch-theme';

type Props = PropsWithChildren<{}>;

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const classTheme = document.querySelector('body') as HTMLBodyElement;
    if (classTheme.classList.contains('dark')) {
      setTheme('dark');
      classTheme.classList.add('dark');
    } else {
      setTheme('light');
      classTheme.classList.remove('dark');
    }
  }, [theme]);
  return <div>{children}</div>;
};

export default ThemeProvider;
