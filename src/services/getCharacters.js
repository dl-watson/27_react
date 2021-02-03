/* eslint-disable max-len */
const getCharacters = () => {
  return fetch(
    "https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters"
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export default getCharacters;
