import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components";

export const SearchPage = () => {
  const { queryTerm } = useParams();
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!queryTerm) return;

      setLoading(true);
      setError(null);

      const url = `https://www.omdbapi.com/?s=${queryTerm}&apikey=${key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setSearch(data.Search);
        } else {
          setSearch([]);
        }
      } catch (err) {
        setError("An error occurred while fetching the movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [queryTerm]);

  return (
    <section className="p-6 bg-black text-yellow-500">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl mb-4">Search Results for: "{queryTerm}"</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}{" "}
        {!loading && search.length === 0 && !error && (
          <p>No movies found for "{queryTerm}".</p>
        )}{" "}
        <div className="flex flex-wrap justify-center items-start gap-8">
          {search.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
