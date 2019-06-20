import axios from "axios";

const KEY = "AIzaSyDXydkXM-Qu6LbFlViI0HqfW0R6a7k1eeg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    ket: KEY
  }
});
