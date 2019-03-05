import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log("Input was Changed");
  }
  onInputClick(event) {
    console.log("Input was click");
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
