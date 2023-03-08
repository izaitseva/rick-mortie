import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacterById = (charId) => {
    return axios.get(`${URL}/${charId}`);
}

export const fetchCharacters = () => {
    return axios.get(URL);
}

export const fetchFilterCharacters = (characterFilter) => {
    return axios.get(`${URL}&query=${characterFilter}`);
}