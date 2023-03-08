// import { useState } from "react";
// import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
// import { fetchFilterCharacters } from "../charactersAPI";

const SearchBar = ({ onSearch }) => {

    // const [query, setQuery] = useState("");

    const handleChange = e => {
        const newSearchValue = e.target.value.toLowerCase();
        // setQuery(newSearchValue);
        onSearch(newSearchValue)
    }

    // const handleSubmit = e => {
    //     console.log(e);
    //     e.preventDefault();
    //     if (query.trim() === '') {
    //         return;
    //     }
    //     onSearch(query)
    // }

    return (
        <form>
            <div className="search-input-wrapper">
                <FaSistrix size={18} color="rgba(0, 0, 0, 0.54)" />
                <input className="search-input" type="text" onChange={handleChange} placeholder="Filter by name..." />
            </div>
        </form>
    )
}

export default SearchBar;