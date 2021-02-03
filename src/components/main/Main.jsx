import React, { Component } from "react";
import List from "../list/List";
import getCharacters from "../../services/getCharacters.js";

export default class Main extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    return getCharacters().then((characters) => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return <List characters={characters} />;
  }
}
