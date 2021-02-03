import React from "react";
import PropTypes from "prop-types";

const ItemDetails = ({ character }) => {
  const characterDetail = character.map((character, index) => (
    <ul key={index}>
      <li>Name: {character.name}</li>
      <img src={character.image} />
      <li>Portrayed by: {character.portrayedby}</li>
      <li>Status: {character.status}</li>
      <li>Born: {character.born || "n/a"}</li>
      <li>Occupation: {character.occupation || "n/a"}</li>
      <li>Affiliations: {character.affiliations || "n/a"}</li>
      <li>Description: {character.description}</li>
    </ul>
  ));

  return <>{characterDetail}</>;
};

ItemDetails.propTypes = {
  character: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      portrayedby: PropTypes.string,
      status: PropTypes.string,
      born: PropTypes.string,
      occupation: PropTypes.string,
      affiliations: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default ItemDetails;
