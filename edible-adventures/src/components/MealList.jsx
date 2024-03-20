import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MealContext } from "../context/MealContext";

export const MealList = () => {
  const { meals } = useContext(MealContext);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");
  const category = params.get("category");

  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
