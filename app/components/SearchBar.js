import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onInputSubmit(this.state.input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="Video"
            placeholder="Search"
            autoComplete="off"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
