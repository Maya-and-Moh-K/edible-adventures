// components/MealDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMealById } from "../api/meals";

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMealById(id).then((data) => setMeal(data.meals[0]));
  }, [id]);

  return (
    <div>
      <h2>Meal Detail</h2>
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

export default MealDetail