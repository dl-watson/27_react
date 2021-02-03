const getCharacterByName = (name) => {
  name = name.split(" ").join("%20");
  return fetch(
    `https://xfiles-api.herokuapp.com/api/v1/characters/${name}`
  ).then((res) => res.json());
};

export default getCharacterByName;
