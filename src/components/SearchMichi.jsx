import { LuSearch } from "react-icons/lu";
import '../styles/SearchMichi.css';
import { useContext } from "react";
import { MichiContext } from "../context/MichiContext";

const SearchMichi = () => {

	const { searchMichi, setSearchMichi } = useContext(MichiContext);

	return (
		<div className="search-michi">
			<input
				onChange={(event) => setSearchMichi(event.target.value)}
				type="text"
				className="search-michi__input"
				placeholder="Busca michis"
				value={searchMichi} />
			<LuSearch className="search-michi__icon" />
		</div>
	)
}

export { SearchMichi };