import axios from "axios";

const API_URL = "https://api.football-data.org";
const API_KEY = "61661fa3538c431ea35bae7abeed2bd3";

const api = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: { "X-Auth-Token": API_KEY },
});

export default api;
