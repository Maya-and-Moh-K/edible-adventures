import React, { useState, useEffect } from "react";
import { fetchRandomMeal } from "../api/meals";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  const getRandomMeal = async () => {
    const randomMeal = await fetchRandomMeal();
    setMeal(randomMeal);
  };

  useEffect(() => {
    getRandomMeal();
  }, []);

  return (
    <div>
      <h2>Random Meal</h2>
      <button onClick={fetchRandomMeal}>Get Random Meal</button>
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

export default RandomMeal;
