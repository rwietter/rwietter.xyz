'use client';

import { IoMdMoon } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';
import { useTheme } from 'store/switch-theme';
import { DarkMode } from './styles';

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const handleSwitchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <DarkMode
      type="button"
      aria-label="toggle change theme"
      name="Enable dark mode"
      onClick={handleSwitchTheme}
    >
      {theme === 'dark' ? (
        <IoMdMoon className="dark" aria-hidden="true" />
      ) : (
        <MdWbSunny className="light" aria-hidden="true" />
      )}
    </DarkMode>
  );
};
