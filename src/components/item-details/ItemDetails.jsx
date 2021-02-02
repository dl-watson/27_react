import React from "react";
import PropTypes from "prop-types";

const ItemDetails = ({ character }) => {
  const characterDetail = (
    <>
      <li>{character.name}</li>
      <li>{character.image}</li>
      <li>{character.portrayedby}</li>
      <li>{character.status}</li>
      <li>{character.born}</li>
      <li>{character.occupation}</li>
      <li>{character.affiliations}</li>
      <li>{character.description}</li>
    </>
  );

  return <ul>{characterDetail}</ul>;
};

ItemDetails.propTypes = {
  character: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      portrayedby: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      born: PropTypes.string,
      occupation: PropTypes.string,
      affiliations: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemDetails;
