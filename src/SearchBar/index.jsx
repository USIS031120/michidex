import { Filters } from "./Filters";
import { SearchMichi } from "./SearchMichi";
import './SearchBar.css';

const SearchBar = () => {

    return(
        <div className="search-bar">
            <SearchMichi />
            <Filters />
        </div>
    )
}

export { SearchBar };