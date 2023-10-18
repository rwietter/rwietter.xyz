import React from 'react';
import { useTheme } from 'store/switch-theme';
import { IoMdMoon } from 'react-icons/io';
import { MdSunny } from 'react-icons/md';
import { Button } from './styles';

// import { Container } from './styles';

const SwitchTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
  return (
    <Button
      type="button"
      aria-label="toggle change theme"
      role="menuitem"
      onClick={handleSwitchTheme}
      className="theme"
    >
      {theme === 'dark' ? (
        <IoMdMoon className="dark" aria-hidden="true" />
      ) : (
        <MdSunny className="light" aria-hidden="true" />
      )}
    </Button>
  );
};

export default SwitchTheme;
