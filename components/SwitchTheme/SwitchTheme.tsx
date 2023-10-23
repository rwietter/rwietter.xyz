import React from 'react';
import { useTheme } from 'store/switch-theme';
import { IoMdMoon } from 'react-icons/io';
import { MdSunny } from 'react-icons/md';
import { Button } from './styles';

interface SwitchThemeProps {
  visible: 'header' | 'sticky';
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ visible }) => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));
  return (
    <Button
      type="button"
      aria-label="toggle change theme"
      title="toggle change theme"
      onClick={handleSwitchTheme}
      className="theme"
      visible={visible}
    >
      {theme === 'dark' ? (
        <IoMdMoon className="dark" aria-hidden="true" title="dark" />
      ) : (
        <MdSunny className="light" aria-hidden="true" title="light" />
      )}
    </Button>
  );
};

export default SwitchTheme;
