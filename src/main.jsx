import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FavouritesProvider } from "./context/FavouritesContext";

createRoot(document.getElementById("root")).render(
  <FavouritesProvider>
    <App />
  </FavouritesProvider>
);
