import React, { useState } from "react";
import { fetchRandomMeal } from "../api/meals";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  const getRandomMeal = async () => {
    const randomMeal = await fetchRandomMeal();
    setMeal(randomMeal);
  };

  const getIngredientsList = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(
          <li key={i}>
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div>
      <h2>Random Meal</h2>
      <button onClick={getRandomMeal}>Get Random Meal</button>
      {meal && (
        <div>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {getIngredientsList(meal)}
          </ul>
          <p>{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
