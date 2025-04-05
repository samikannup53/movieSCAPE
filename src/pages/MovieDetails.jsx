import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackupImage from "../assets/BackupImage.jpg";
import { OrbitProgress } from "react-loading-indicators";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const key = import.meta.env.VITE_API_KEY;
  const url = `https://www.omdbapi.com/?apikey=${key}&i=${params.imdbID}`;

  const { Poster, Title, Year, Type } = movie;
  const image =
    Poster && Poster !== "N/A" && Poster !== "" ? Poster : BackupImage;

  useEffect(() => {
    setIsLoading(true);
    setError("");

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((jsonData) => {
        setMovie(jsonData);
      })
      .catch((error) => {
        setError("Failed to Fetch Data :" + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    document.title = `movieSCAPE | ${Title}`;
  }, [Title]);

  const handleExploreClick = () => {
    if (Type === "movie") {
      navigate("/streams/movies");
    } else if (Type === "series") {
      navigate("/streams/series");
    } else if (Type === "episode") {
      navigate("/streams/episodes");
    }
  };

  return (
    <section className="min-h-[72vh] z-40  text-[rgb(245,197,24)]">
      <div className="container mx-auto px-6">
        {isLoading && (
          <div className="text-center text-2xl text-white">
            <OrbitProgress
              variant="spokes"
              color="rgb(245,197,24)"
              size="medium"
              text="loading..."
              textColor=""
            />
          </div>
        )}
        {error && (
          <div className="text-center text-2xl text-red-500">
            Error: {error}
          </div>
        )}

        {!isLoading && !error && movie && (
          <>
            <h1 className="bg-[rgb(0,0,0)] sticky capitalize z-40 top-[84px] text-xl sm:text-2xl mb-4 border-b font-medium border-[rgb(245,197,24)] pb-2 text-white flex flex-items-center">
              <span className="text-[rgb(245,197,24)] font-bold ">
                | &nbsp;
              </span>
              {Title}
              <span className="text-3xl">&nbsp; &gt;</span>
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
                  <h3 className="text-xl sm:text-2xl font-medium">
                    {movie.Title}
                  </h3>
                  <p className="max-w-[720px] text-white">{movie.Plot}</p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      GENRES
                    </span>{" "}
                    : &nbsp;{movie.Genre}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      TYPE
                    </span>{" "}
                    : &nbsp;{movie.Type}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      ACTORS
                    </span>{" "}
                    : &nbsp;{movie.Actors}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      DIRECTOR
                    </span>{" "}
                    : &nbsp;{movie.Director}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      WRITER
                    </span>{" "}
                    : &nbsp;{movie.Writer}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      AWARDS
                    </span>{" "}
                    : &nbsp;{movie.Awards}{" "}
                  </p>
                  <p className="text-white">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      YEAR
                    </span>{" "}
                    : &nbsp;{Year}{" "}
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-[rgb(245,197,24)] ">
                      RATINGS :
                    </span>
                    {movie.Ratings ? (
                      <p>
                        {movie.Ratings.map((genre) => (
                          <div key={genre.Source} className="flex">
                            <span className="border  w-55 p-2 text-white border-[rgb(245,197,24)] ">
                              {genre.Source}
                            </span>
                            <span className="border-y border-r  w-20 p-2 text-white border-[rgb(245,197,24)]">
                              {genre.Value}
                            </span>
                          </div>
                        ))}
                      </p>
                    ) : (
                      ""
                    )}
                  </p>
                  <button
                    onClick={handleExploreClick}
                    className="border rounded-full px-6 py-2 cursor-pointer font-medium hover:bg-[rgb(245,197,24)] hover:text-black "
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
