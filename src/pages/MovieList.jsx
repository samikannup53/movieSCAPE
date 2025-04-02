import { useEffect } from "react";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ title, apiPath, stream }) => {
  const { data: movies } = useFetch(apiPath, stream);

  useEffect(() => {
    document.title = title;
  });
  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)]">
      <div className="container mx-auto p-6">
        <h1 className="text-xl my-4 border-b pb-2">{title}</h1>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {movies.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} page="movielist" />;
          })}
        </div>
      </div>
    </section>
  );
};
