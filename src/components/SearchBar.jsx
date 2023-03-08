import { FaSistrix } from "react-icons/fa";

const SearchBar= () => {

    return (
        <form>
            <div className="search-input-wrapper">
                <FaSistrix size={18} color="rgba(0, 0, 0, 0.54)"/>
                <input className="search-input" type="text" placeholder="Filter by name..."/>
            </div>
        </form>
    )
}

export default SearchBar;