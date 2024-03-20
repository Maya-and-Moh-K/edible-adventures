import React, { useState, useEffect } from "react";
import { fetchRandomMeal } from "../api/meals";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchRandomMeal().then((data) => setMeal(data.meals));
  }, []);
  return (
    <div>
      <h2>Random Meal</h2>
      {meal && (
        <div>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMeal
