import React from "react";

class SearchBar extends React.Component {
  state = {
    playerName: "",
    platform: ""
  };

  setPlatform = num => {
    this.setState({ platform: num });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { playerName, platform } = this.state;

    this.props.onSubmit(playerName, platform);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group text-center">
          <div>
            <label className="mr-2">Player Name: </label>
            <input
              type="text"
              placeholder="Enter name..."
              className="form-group"
              value={this.state.playerName}
              onChange={e => this.setState({ playerName: e.target.value })}
            />
          </div>
          <button
            onClick={() => this.setPlatform(5)}
            className="btn btn-lg mx-2"
          >
            <i className="fab fa-windows" />
          </button>
          <button
            onClick={() => this.setPlatform(2)}
            className="btn btn-lg mx-2"
          >
            <i className="fab fa-playstation" />
          </button>
          <button
            onClick={() => this.setPlatform(1)}
            className="btn btn-lg mx-2"
          >
            <i className="fab fa-xbox" />
          </button>
          <input
            type="submit"
            className="btn btn-danger btn-lg btn-block mt-3"
            value="Search"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
