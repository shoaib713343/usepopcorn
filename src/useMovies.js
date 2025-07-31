import { useState, useEffect, useRef } from "react";
import { KEY } from "./config";

export function useMovies(query, callback) {
      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");

  useEffect(() => {

    callback?.();
    const controller = new AbortController();

    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong fetching the movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movies not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    // handleCloseMovie();
    fetchMovie();

    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };

}