// api/meals.js
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  return response.json();
};

export const fetchMealByName = async (name) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
  return response.json();
};

export const fetchRandomMeal = async () => {
  const response = await fetch(`${BASE_URL}/random.php`);
  return response.json();
};

export const fetchMealById = async (id) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  return response.json();
};
