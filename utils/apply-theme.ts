import { TypeTheme } from 'types/theme';
import { globalStyles } from 'styles/global';
import { getThemeProps } from './get-theme';

export const applyTheme = (currentTheme: TypeTheme) => {
  globalStyles();
  const theme = getThemeProps(currentTheme);
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
};
