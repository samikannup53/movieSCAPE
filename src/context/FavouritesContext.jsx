import React, { createContext, useContext, useState } from "react";

// Create the context
export const FavouritesContext = createContext();

// Provider Component
export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (movie) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.find((fav) => fav.imdbID === movie.imdbID)) {
        return prevFavourites.filter((fav) => fav.imdbID !== movie.imdbID); // Remove if exists
      } else {
        return [...prevFavourites, movie]; // Add if not exists
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


