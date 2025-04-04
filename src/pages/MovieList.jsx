import { useEffect, useState } from "react";
import { Card } from "../components";
import { OrbitProgress } from "react-loading-indicators";

export const MovieList = ({ title, apiPath, stream }) => {
  const [movies, setMovies] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${apiPath}&type=${stream}`;

  useEffect(() => {
    setIsLoading(true);
    setMovies([]);
    setError("");

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((jsonData) => {
        if (jsonData.Response === "True") {
          setMovies(jsonData.Search);
        } else {
          setError(`No ${stream} Found`);
        }
      })
      .catch((error) => {
        setError("Failed to Fetch Data :" + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    document.title = title;
  }, [url, title, stream]);

  return (
    <section className="min-h-[60vh] z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)]">
      <div className="container mx-auto px-6">
        <h1 className="bg-[rgb(0,0,0)] sticky z-40 top-[84px] text-2xl mb-4 border-b font-medium border-[rgb(245,197,24)] pb-2 text-white flex items-center">
          <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
          {stream === "movie"
            ? "Movies"
            : stream === "series"
            ? "Series"
            : "Episodes"}
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <div className="flex justify-center items-center">
          {isLoading && (
            <OrbitProgress
              variant="spokes"
              color="rgb(245,197,24)"
              size="medium"
              text="loading..."
              textColor=""
            />
          )}
        </div>
        {error && <p className="text-red-500 capitalize text-xl font-medium">{error}</p>}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {movies.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} page="movielist" />;
          })}
        </div>
      </div>
    </section>
  );
};
