import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

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
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
