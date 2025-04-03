import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FavouritesProvider } from "./context/FavouritesContext";
import { StreamsProvider } from "./context/StreamsContext";

createRoot(document.getElementById("root")).render(
  <FavouritesProvider>
    <StreamsProvider>
      <App />
    </StreamsProvider>
  </FavouritesProvider>
);
