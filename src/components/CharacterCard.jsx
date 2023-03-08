import { NavLink } from "react-router-dom";
import { paths } from "../paths";

const CharacterCard = ({ characters }) => {

    return (
        <NavLink to={paths.characterPage}>
            <li>
                {characters.map(character => (
                    <div key={character.id}>
                        <img src={character.image} alt="" />
                        < h3 > {character.name}</h3>
                        <p>{character.species}</p>
                    </div>
                ))}
            </li>
        </NavLink>
    )
}

export default CharacterCard;