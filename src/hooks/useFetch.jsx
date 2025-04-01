import { useEffect, useState } from "react";

export const useFetch = (apiPath, stream, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${apiPath}&type=${stream}`;
  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.Search));
    }
    fetchMovies();
  }, [url]);

  return { data };
};
