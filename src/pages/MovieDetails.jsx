import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BackupImage from "../assets/BackupImage.jpg";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${key}&i=${params.imdbID}`;

  const { Poster, Title, Year, Type } = movie;
  const image = Poster && Poster !== 'N/A' && Poster !== '' ? Poster : BackupImage;

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setMovie(jsonData));
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    document.title = `movieSCAPE | ${movie.Title}`;
  });

  return (
    <section className="min-h-[72vh] z-40  text-[rgb(245,197,24)]">
      <div className="container mx-auto p-10">
        <h1 className="border-b mb-6 pb-2 text-2xl font-medium">
          {movie.Title}
        </h1>
        <div className="flex  justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-3 border rounded-md">
            <div>
              <img
                src={image}
                className="rounded-t-md lg:rounded-l-md lg:rounded-t-none h-full sm:h-[20rem] lg:h-full w-full object-cover"
                alt="Movie Poster Image"
              />
            </div>
            <div className="p-4 flex flex-col items-start justify-start gap-1">
              <h3 className="text-2xl font-medium">{movie.Title}</h3>
              <p className="max-w-[720px]">{movie.Plot}</p>
              <p>Genres : &nbsp;{movie.Genre}</p>
              <p>Actors : &nbsp;{movie.Actors}</p>
              <p>Director : &nbsp;{movie.Director}</p>
              <p>Writer : &nbsp;{movie.Writer}</p>
              <p>Awards : &nbsp;{movie.Awards}</p>
              <p>Release Year : &nbsp;{movie.Year}</p>
              <p className="mb-4">
                Ratings
                {movie.Ratings ? (
                  <p>
                    {movie.Ratings.map((genre) => (
                      <div key={genre.Source} className="flex">
                        <span className="border w-55 p-2">{genre.Source}</span>
                        <span className="border-y border-r w-15 p-2">
                          {genre.Value}
                        </span>
                      </div>
                    ))}
                  </p>
                ) : (
                  ""
                )}
              </p>
              <Link className="border rounded-full px-6 py-2">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
