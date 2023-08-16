import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA2YTkxNjM3ZWJmYjQ5YzM1M2JjNzc4MGQ4ZDU4ZiIsInN1YiI6IjY0ZGNjODczZDEwMGI2MTRiMGE0OTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QcKZZW6uKxbNzGZedkzWotzyjivhXWUtg8GxhsRLYk";
console.log(TMDB_TOKEN);
const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
