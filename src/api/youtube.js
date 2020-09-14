import axios from 'axios'

const KEY = 'AIzaSyC9Vep77Bb5nuYmpiUn-yeawPLkSDYtOdY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});