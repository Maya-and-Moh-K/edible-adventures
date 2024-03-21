import React, { useState } from "react";
import { fetchRandomMeal } from "../api/meals";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  const getRandomMeal = async () => {
    const randomMeal = await fetchRandomMeal();
    setMeal(randomMeal);
  };

  return (
    <div>
      <h2>Random Meal</h2>
      <button onClick={getRandomMeal}>Get Random Meal</button>
      {meal && (
        <div>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          {/* <ul>{getIngredientsList(meal)}</ul> */}
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
