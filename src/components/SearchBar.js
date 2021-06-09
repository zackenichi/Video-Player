import React, { useState } from "react";
import { rword } from "rword";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  const onRandomPressed = (event) => {
    event.preventDefault();
    let word = rword.generate();
    // console.log(`generated word is ${word}`);
    setTerm(word);
    onFormSubmit(word);
  };

  return (
    <div className="navigate">
      <h1>Video Search</h1>
      <div className="search-bar ui segment grid">
        <div className="eleven wide column">
          <form className="ui form" onSubmit={onSubmit}>
            <div className="field ui icon input sixteen wide column">
              <input
                type="text"
                value={term}
                onChange={onInputChange}
                placeholder="Search for a video and press enter"
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
        <div className="five wide column">
          <button
            className="ui right labeled icon button fluid"
            onClick={onRandomPressed}
          >
            <i className="right arrow icon"></i>
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
