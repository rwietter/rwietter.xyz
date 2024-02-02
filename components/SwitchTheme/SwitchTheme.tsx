import React from "react";
import { useTheme } from "store/switch-theme";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { Button } from "./styles";

interface SwitchThemeProps {
	visible: "header" | "sticky";
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ visible }) => {
	const { theme, setTheme } = useTheme();
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const handleSwitchTheme = () => {
		buttonRef.current?.classList.add("active");
		const timeout = setTimeout(() => {
			buttonRef.current?.classList.remove("active");
			clearTimeout(timeout);
		}, 500);
		return theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<Button
			type="button"
			aria-label="toggle change theme"
			title="toggle change theme"
			onClick={handleSwitchTheme}
			className="theme"
			ref={buttonRef}
			visible={visible}
		>
			{theme === "dark" ? (
				<MdSunny aria-hidden="true" title="light" />
			) : (
				<IoMdMoon aria-hidden="true" title="dark" />
			)}
		</Button>
	);
};

export default SwitchTheme;
