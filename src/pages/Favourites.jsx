import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import { Card } from "../components";

export const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)]">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl my-4 border-b border-[rgb(245,197,24)] pb-2 text-white flex flex-items-center">
          <span className="text-[rgb(245,197,24)]">| &nbsp;</span>Favourites
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <div className="">
          {favourites.length === 0 ? (
            <p>No favourite movies yet.</p>
          ) : (
            <div className="flex flex-wrap justify-center items-start gap-8">
              {favourites.map((movie) => (
                <Card key={movie.imdbID} movie={movie} page="favourites" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
