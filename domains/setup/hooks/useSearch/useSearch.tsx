/* eslint-disable no-unused-vars */
import { useState, ChangeEvent } from "react";

interface UseRealTimeSearchResult<T> {
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	query: string;
	results: T[];
}

function useRealTimeSearch<T>(dataset: T[]): UseRealTimeSearchResult<T> {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<T[]>([]);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchQuery = event.target.value.toLowerCase();
		setQuery(searchQuery);

		if (searchQuery.trim().length === 0) {
			setResults([]);
			return;
		}

		const filteredResults = dataset.filter((char: any) => {
			const type = char.type.toLowerCase();
			const word = char.name.toLowerCase();

			return word.includes(searchQuery) || type.includes(searchQuery);
		});

		setResults(filteredResults);
	};

	return { query, results, handleInputChange };
}

export { useRealTimeSearch };
