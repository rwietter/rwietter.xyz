import { darkTheme, lightTheme } from 'features/ui/theme';
import { EnvTheme } from 'features/ui/theme/ts';

const getThemeProps = (currentTheme: EnvTheme) => (currentTheme === 'light' ? darkTheme : lightTheme);

export { getThemeProps };
