import { createContext, useState } from "react";
import { michis } from "../utils/data";

const MichiContext = createContext();

const MichiProvider = ({ children }) => {

	const [searchMichi, setSearchMichi] = useState('');
	const [selectedType, setSelectedType] = useState('Todos');
	
	const searchedMichis = michis.filter(michi => {
		const searchText = searchMichi.toLowerCase();
		const michiName = michi.name.toLowerCase();

		const matchesSearch = michiName.includes(searchText);
		
		const matchesType = selectedType === "Todos" ||
		michi.types.type1 === selectedType ||
		michi.types.type2 === selectedType;

		return matchesSearch && matchesType;

	});

	return (
		<MichiContext.Provider value={{
			searchMichi,
			setSearchMichi,
			searchedMichis,
			selectedType,
			setSelectedType,
		}}>
			{ children }
		</MichiContext.Provider>
	)
}

export { MichiContext, MichiProvider };