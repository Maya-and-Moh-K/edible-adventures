import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchMealByName } from "../api/meals";

export const SearchByName = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchMealByName(query);
      history.push(`/meals?search=${query}`);
    } catch (error) {
      setError("No results found");
    }
  };

  return (
    <div>
      <h2>Search by Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter meal name"
        />
        <button type="submit">Search</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
