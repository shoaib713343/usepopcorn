import { useEffect, useState } from "react";
import { KEY } from "./config";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  

  const [watched, setWatched] = useLocalStorageState([], "watched");



  function handleSelectMovie(id) {
    setSelectedId((currentId) => (currentId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }





  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}