import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchMealsByCategory } from "../api/meals";

export const SearchByCategory = () => {
  const [category, setCategory] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/meals?category=${category}`);
  };

  return (
    <div>
      <h2>Search by Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
