import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import apexAPI from "./apis/apex";
import Player from "./components/Player";

class App extends Component {
  state = {
    foundPlayer: null
  };

  onSubmit = async (player, platform) => {
    const response = await apexAPI.get(`/${platform}/${player}`);
    this.setState({ foundPlayer: response.data });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <SearchBar onSubmit={this.onSubmit} />
            <Player player={this.state.foundPlayer} />
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default App;
