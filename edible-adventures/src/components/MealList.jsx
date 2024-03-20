import React, { useContext } from 'react';
import MealContext from '../context/MealContext';
const MealList = () => {
  const { meals } = useContext(MealContext);

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

export default MealList;
