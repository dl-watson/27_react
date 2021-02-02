const getCharacterByName = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then((res) => res.json())
    .then((json) => json.results);
};

export default getCharacterByName;
