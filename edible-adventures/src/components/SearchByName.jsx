import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMealByName } from "../api/meals";

const SearchByName = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchedMeals = await fetchMealByName(query);
      if (searchedMeals.length === 0) {
        setError("No results found");
        setMeals([]);
      } else {
        setMeals(searchedMeals);
        setError("");
      }
      // Remove this line if you only want to update the URL without navigating
      history.push(`/meals?search=${query}`);
    } catch (error) {
      setError("An error occurred while fetching meals.");
      setMeals([]);
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
      </form>
      {error && <p>{error}</p>}
      {meals.length > 0 && (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchByName;
