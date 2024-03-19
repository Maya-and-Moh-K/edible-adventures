import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchMealByName } from "../api/meals";

export const SearchByName = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/meals?search=${query}`);
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
      </form>
    </div>
  );
};
