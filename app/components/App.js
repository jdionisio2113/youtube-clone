import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      videos: [],
      selectedVideo: null
    };

    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  componentDidMount() {
    this.onInputSubmit("Taylor Swift");
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
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        });
      });
  }

  onVideoSelect(video) {
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div>
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
