import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BackupImage from "../assets/BackupImage.jpg";
import { FavouritesContext } from "../context/FavouritesContext";
import { ScrollTop } from "../utilities/ScrollTop";

export const Card = ({ movie, page }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.some((fav) => fav.imdbID === movie.imdbID);
  
  const navigate = useNavigate();

  const { Poster, Title, Year, Type } = movie;
  const image =
    Poster && Poster !== "N/A" && Poster !== "" ? Poster : BackupImage;

  const handleDetailsClick = () => {
    navigate(`/streams/${movie.imdbID}/`);
  };

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
        <p className="">Year : <span className="text-white">{Year}</span></p>
        <p className="mb-3 text-[#00C2FF] uppercase font-medium">{Type}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              handleDetailsClick(), ScrollTop();
            }}
            className="border px-4   rounded-full cursor-pointer hover:bg-[rgb(245,197,24)] hover:text-black"
          >
            Details
          </button>
          {page !== "favourites" ? (
            <button
              className="text-[rgb(245,197,24)] cursor-pointer"
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
