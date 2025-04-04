import { Header, Footer } from "./components";
import { Home, MovieList, MovieDetails, SearchPage, Favourites, About } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home title="movieSCAPE | Your Ultimate Movie Destination" />} />
          <Route path="streams/movies" element={<MovieList title="movieSCAPE | Movies" apiPath="movie" stream="movie" />} />
          <Route path="streams/series" element={<MovieList title="movieSCAPE | Series" apiPath="series" stream="series" />} />
          <Route path="streams/episodes" element={<MovieList title="movieSCAPE | Episodes" apiPath="episode" stream="episode" />} />
          <Route path="streams/:imdbID" element={<MovieDetails/>}  />
          <Route path="search/:queryTerm" element={<SearchPage/>}  />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
