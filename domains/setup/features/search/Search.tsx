/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRef, type ChangeEvent, type FC, useEffect } from "react";
import * as S from "./styles";

interface SearchProps {
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ handleInputChange }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
		return () => {
			inputRef.current?.blur();
		};
	}, []);

	return (
		<S.SearchContent>
			<nav>
				<a href="#desk">#Desk</a>
				<a href="#softwares">#Softwares</a>
				<a href="#customization">#Customization</a>
			</nav>

			<S.InputSearch>
				<S.Description>Pesquise por um item</S.Description>
				<input
					type="text"
					onChange={handleInputChange}
					placeholder="Ex: vscode theme"
					ref={inputRef}
				/>
			</S.InputSearch>
		</S.SearchContent>
	);
};
export { Search };
