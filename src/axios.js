import axios from "axios";

const instance = axios.create({
  baseURL:'https://us-central1-shelbyamclone.cloudfunctions.net/api'
  // 'http://localhost:5001/shelbyamclone/us-central1/api'
  
});

export default instance;


