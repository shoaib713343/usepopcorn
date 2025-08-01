import { use, useEffect } from "react";
import { useRef } from "react";
import { useKey } from "../useKey";

export default function Search({ query, setQuery }) {
  const inputEl  = useRef(null);

  useKey("Enter", () => {
    if(document.activeElement === inputEl.current) {
      inputEl.current.focus();
      setQuery("");
    }
  });

  

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}