import PropTypes from "prop-types";
import React from "react";
import ListItem from "../list-item/ListItem.jsx";

const List = ({ characters }) => {
  const characterList = characters.map((character, index) => {
    return (
      <li key={index}>
        <ListItem {...character} />
      </li>
    );
  });

  return <ul>{characterList}</ul>;
};

List.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default List;
