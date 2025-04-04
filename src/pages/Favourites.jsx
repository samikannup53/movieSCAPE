import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import { Card } from "../components";

export const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <section className="z-40 bg-[rgb(0,0,0)] text-[rgb(245,197,24)] min-h-[70vh]">
      <div className="container mx-auto px-6">
        <h1 className="bg-[rgb(0,0,0)] text-2xl z-40 mb-4 sticky top-[84px] border-b font-medium border-[rgb(245,197,24)] pb-2 text-white flex flex-items-center">
          <span className="text-[rgb(245,197,24)] font-bold">| &nbsp;</span>
          Favourites
          <span className="text-3xl">&nbsp; &gt;</span>
        </h1>
        <div className="">
          {favourites.length === 0 ? (
            <p className="text-xl font-medium flex items-center gap-3">
              {" "}
              <span className="text-white text-2xl">Oops!!!</span> Your
              Favourite List is Empty.
            </p>
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
