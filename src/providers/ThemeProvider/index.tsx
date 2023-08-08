'use client';

import React, { PropsWithChildren, useEffect } from 'react';
import { useTheme } from 'store/switch-theme';
import { applyTheme } from 'utils/apply-theme';

type Props = PropsWithChildren<{}>;

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return <div>{children}</div>;
};

export default ThemeProvider;
