import React from "react";
import { rword } from "rword";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  onRandomPressed = (event) => {
    event.preventDefault();
    let word = rword.generate();
    // console.log(`generated word is ${word}`);
    this.setState({ term: word });
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="navigate">
        <h1>Video Search</h1>
        <div className="search-bar ui segment grid">
          <div className="eleven wide column">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field ui icon input sixteen wide column">
                <input
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  placeholder="Search for a video and press enter"
                />
                <i className="search icon"></i>
              </div>
            </form>
          </div>
          <div className="five wide column">
            <button
              className="ui right labeled icon button fluid"
              onClick={this.onRandomPressed}
            >
              <i className="right arrow icon"></i>
              Random
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
