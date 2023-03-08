import { useEffect, useState } from "react";
import { fetchCharacters } from "../charactersAPI";
import CharacterCard from "../components/CharacterCard";

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getCharacters = async () => {
            try {
                setLoading(true);
                const { data } = await fetchCharacters();
                setCharacters(data.results);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getCharacters();
    }, [])

    return (
        <div>
            {error && <p>Oh crap!</p>}
            {loading && <h2>I'm trying, wait...</h2>}
            {<ul>
                <CharacterCard characters={characters} />
            </ul>}
        </div >
    )
}

export default Characters;