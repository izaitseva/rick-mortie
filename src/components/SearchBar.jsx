// import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
// import { fetchFilterCharacters } from "../charactersAPI";

const SearchBar = () => {

    // const [search, setSearch] = useState("");

    // const handleChange = e => {
    //     const newSearchValue = e.target.value.toLowerCase();
    //     setSearch(newSearchValue);
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (search.trim() === '') {
    //         return;
    //     }
    //     return onSearch.filter(character => character.name.includes(search))
    // }

    return (
        <form>
            <div className="search-input-wrapper">
                <FaSistrix size={18} color="rgba(0, 0, 0, 0.54)" />
                <input className="search-input" type="text" placeholder="Filter by name..." />
            </div>
        </form>
    )
}

export default SearchBar;