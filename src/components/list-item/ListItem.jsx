import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ name, image, description }) => {
  return (
    <figure>
      <p>{name}</p>
      <Link to={`/details/${name}`}>
        <img src={image} />
      </Link>
      <figcaption>{description}</figcaption>
    </figure>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListItem;
