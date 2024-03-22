import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMealsByCategory } from "../api/meals";
import { fetchMealById } from "../api/meals";
// import CategorySelector from "./CategorySelector";

const SearchByCategory = () => {
  const [category, setCategory] = useState("Beef");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [ids, setIds] = useState([]);
  const [idMeals, setIdMeals] = useState([]);
  const history = useNavigate();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    setIds([]);
    const arr = [];
    for (let meal of meals) {
      arr.push(meal["idMeal"]);
    }
    setIds(arr);
  }, [meals]);

  useEffect(() => {
    // console.log(ids);

    const settingIdMeals = async () => {
      try {
        setIdMeals([]);
        const idMealArr = [];
        for (let id of ids) {
          const meal = await fetchMealById(id);
          idMealArr.push(meal[0]);
        }
        setIdMeals(idMealArr);
      } catch (error) {
        setError("No results found");
      }
    };
    settingIdMeals();
  }, [ids]);

  useEffect(() => {
    console.log(idMeals);
  }, [idMeals]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchedMeals = await fetchMealsByCategory(category);
      setMeals(fetchedMeals);
      // console.log(fetchedMeals);
      history.push(`/meals?category=${category}`);
    } catch (error) {
      setError("No results found");
    }
  };

  const getIngredientsList = (meal) => {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredientsList.push(
          <li key={`ingredient-${i}`}>
            {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientsList;
  };

  return (
    <div>
      <h2>Search by Category</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/* {CategorySelector()} */}
        <label for="category">Select a Category:</label>
        <select name="category" id="category">
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Dessert">Dessert</option>
          <option value="Lamb">Lamb</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Pork">Side</option>
          <option value="Starter">Starter</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Goat">Goat</option>
        </select>
        <button type="submit">Search</button>
        {error && <p>{error}</p>}
      </form>
      {idMeals.length > 0 && (
        <ul>
          {idMeals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <ul>{getIngredientsList(meal)}</ul>
              {meal.strInstructions}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchByCategory;
