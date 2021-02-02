import PropTypes from "prop-types";
import React, { Component } from "react";
import ItemDetails from "../item-details/ItemDetails";
import getCharacterByName from "../../services/getCharacterByName.js";

export default class Details extends Component {
  state = {
    character: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.name);
    console.log("component did mount");
    return getCharacterByName(this.props.match.params.name).then((character) =>
      this.setState({ character })
    );
  }

  render() {
    const { character } = this.state;
    return <ItemDetails character={character} />;
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
