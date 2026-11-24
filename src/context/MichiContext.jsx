import { createContext, useState } from "react";
import { michis } from "../utils/data";

const MichiContext = createContext();

const MichiProvider = ({ children }) => {

	const [searchMichi, setSearchMichi] = useState('');
	
	const searchedMichis = michis.filter(michi => {
		const searchText = searchMichi.toLowerCase();
		const michiName = michi.name.toLowerCase();

		return michiName.includes(searchText);
	});

	return (
		<MichiContext.Provider value={{
			searchMichi,
			setSearchMichi,
			searchedMichis,
		}}>
			{ children }
		</MichiContext.Provider>
	)
}

export { MichiContext, MichiProvider };