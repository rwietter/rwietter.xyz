import { darkTheme, lightTheme } from 'styles/theme';
import { TypeTheme } from '../types/theme';

const getThemeProps = (currentTheme: TypeTheme) => (currentTheme === 'light' ? darkTheme : lightTheme);

export { getThemeProps };
