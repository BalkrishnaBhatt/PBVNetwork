import axios from 'axios';

let baseUrl = 'https://www.pbvnetwork.com/wp-json/';

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
