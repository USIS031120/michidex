import { useState } from "react";
import { michis } from "../utils/data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { MichiContext } from "./MichiContext";

const MichiProvider = ({ children }) => {

	const [searchMichi, setSearchMichi] = useState('');
	const [selectedType, setSelectedType] = useState('Todos');
	
	const { favoriteIds, onSave } = useLocalStorage();
	// console.log(favoriteIds);
	
	const searchedMichis = michis.filter(michi => {
		const searchText = searchMichi.toLowerCase();
		const michiName = michi.name.toLowerCase();

		const matchesSearch = michiName.includes(searchText);
		
		const matchesType = selectedType === "Todos" ||
		michi.types.type1 === selectedType ||
		michi.types.type2 === selectedType;

		return matchesSearch && matchesType;

	});

	const toggleFavorite = (id) => {
		const isFavorite = favoriteIds.includes(id);
		
  		const nextFavoriteIds = isFavorite ? favoriteIds.filter(favoriteId => favoriteId !== id) : [...favoriteIds, id];
		
		onSave(nextFavoriteIds);
	};

	return (
		<MichiContext.Provider value={{
			searchMichi,
			setSearchMichi,
			searchedMichis,
			selectedType,
			setSelectedType,
			favoriteIds,
			toggleFavorite,
		}}>
			{ children }
		</MichiContext.Provider>
	)
}

export { MichiProvider };