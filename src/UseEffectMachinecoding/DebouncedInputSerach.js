import React, { useState, useEffect } from "react";

const DebouncedInputSerach = () => {
  const [query, setQuery] = useState("");
  const [debouncedquery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handlequery = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handlequery);
    };
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search.."
      />
      <p>Debouncedquery : {debouncedquery}</p>
    </div>
  );
};

export default DebouncedInputSerach;
