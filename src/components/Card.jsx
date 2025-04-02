import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BackupImage from "../assets/BackupImage.jpg";
import { FavouritesContext } from "../context/FavouritesContext";

export const Card = ({ movie, page }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.some((fav) => fav.imdbID === movie.imdbID);

  const { Poster, Title, Year, Type } = movie;
  const image =
    Poster && Poster !== "N/A" && Poster !== "" ? Poster : BackupImage;

  return (
    <div
      title={Title}
      className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 border flex flex-col gap-2 relative rounded-md shadow-custom-light"
    >
      <img
        src={image}
        alt={`${Title} Movie Poster Image`}
        className="w-full h-70 sm:h-50  xl:h-70 object-cover rounded-t-md"
      />
      <div className="p-3 -mt-4">
        <h3 className="text-2xl font-medium heading-overflow ">{Title}</h3>
        <p className="">Year : {Year}</p>
        <p className="mb-3">{Type}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/streams/${movie.imdbID}/`}
            className="border px-2  rounded-lg"
          >
            Details
          </Link>
          {page !== "favourites" ? (
            <button
              className="text-[rgb(245,197,24)]"
              onClick={() => toggleFavourite(movie)}
            >
              {isFavourite ? (
                <div className="flex items-center gap-2">
                  <span className="">Marked </span>
                  <i className="fa-solid fa-heart text-lg"></i>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Mark</span>
                  <i className="fa-regular fa-heart text-lg"></i>
                </div>
              )}
            </button>
          ) : (
            <button
              className="text-[rgb(245,197,24)]"
              onClick={() => toggleFavourite(movie)}
            >
              <div className="flex items-center gap-2">
                <span>Unmark</span>
                <i className="fa-solid fa-heart text-lg"></i>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
