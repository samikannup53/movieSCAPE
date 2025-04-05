import React, { createContext, useContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (movie) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.find((fav) => fav.imdbID === movie.imdbID)) {
        return prevFavourites.filter((fav) => fav.imdbID !== movie.imdbID); 
      } else {
        return [...prevFavourites, movie]; 
      }
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};


