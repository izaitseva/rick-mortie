import { generatePath, NavLink } from "react-router-dom";
import { paths } from "../paths";

const CharacterCard = ({ characters }) => {

    return (
        <>
            {
                characters.map(character => (
                    <li key={character.id}>
                        <NavLink to={generatePath(paths.characterPage, { id: character.id })}>
                            <div key={character.id}>
                                <img src={character.image} alt="" />
                                < h3 > {character.name}</h3>
                                <p>{character.species}</p>
                            </div>
                        </NavLink>
                    </li >
                ))
            }
        </>
    )
}

export default CharacterCard;