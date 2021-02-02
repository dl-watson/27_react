import React, { Component } from "react";
import getCharacters from "../../services/getCharacters.js";
import List from "../list/List.jsx";

export default class Main extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    getCharacters().then((characters) => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return (
      <>
        <h1>test compile</h1>
        <List characters={characters} />
      </>
    );
  }
}
