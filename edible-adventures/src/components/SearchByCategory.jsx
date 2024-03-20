import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMealsByCategory } from "../api/meals";

const SearchByCategory = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchMealsByCategory(category);
      history.push(`/meals?category=${category}`);
    } catch (error) {
      setError("No results found");
    }
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
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SearchByCategory