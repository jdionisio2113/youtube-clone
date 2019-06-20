import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      videos: []
    };

    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputSubmit(input) {
    youtube
      .get("/search", {
        params: {
          q: input
        }
      })
      .then(res => {
        console.log(res.data.items);
        this.setState({
          videos: res.data.items
        });
      });
  }

  render() {
    return (
      <div>
        <SearchBar onInputSubmit={this.onInputSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
