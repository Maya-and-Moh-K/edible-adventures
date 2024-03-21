const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMealsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  console.log(data.meals || []);
  return data.meals || [];
};

export const fetchMealByName = async (name) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
  const data = await response.json();
  console.log(data.meals || []);
  return data.meals || [];
};

export const fetchRandomMeal = async () => {
  const response = await fetch(`${BASE_URL}/random.php`);
  const data = await response.json();
  console.log(data.meals || null);
  return data.meals ? data.meals[0] : null;
};

export const fetchMealById = async (id) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  // console.log(data.meals || null);
  return data.meals || [];
};
