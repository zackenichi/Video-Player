import axios from "axios";

// const KEY = "AIzaSyA-W5rYcsAE0RNN_B57gJg-JOAp24XYc5o";
const KEY = "AIzaSyBWE1a2aNWq4CuQTPQfwRBJVYTPMbjFNvE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
