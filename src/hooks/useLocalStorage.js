import { useEffect, useState } from "react";


const getMichis = () => {
	const storedIds = localStorage.getItem('michis');
	let parsedIds;

	if (!storedIds) {
		localStorage.setItem('michis', JSON.stringify([]));
		parsedIds = [];
	} else {
		parsedIds = JSON.parse(storedIds)
	}
	return parsedIds;
}

export const useLocalStorage = () => {

	const [favoriteIds, setFavoriteIds] = useState(getMichis);

	
	useEffect(() => {
		const stringifiedIds = JSON.stringify(favoriteIds);
		localStorage.setItem('michis', stringifiedIds);
		
	}, [favoriteIds]);

	const onSave = (favorites) => {
		setFavoriteIds(favorites);
	}

	return { favoriteIds, onSave };
}