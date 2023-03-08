import axios from "axios";

const URL = 'https://rickandmortyapi.com/api';
const SEARCH_URL = `${URL}/character`;
// const CHAR_URL = `${URL}/character`;
const IMAGE_URL = `${SEARCH_URL}/avatar`;

export const imageUrl = (imagePath) => {
    return axios.get(`${IMAGE_URL}/${imagePath}`);
}

export const getCharacterById = (charId) => {
    return axios.get(`${SEARCH_URL}/${charId}`);
}

export const getCharacters = () => {
    return axios.get(`${SEARCH_URL}`);
}