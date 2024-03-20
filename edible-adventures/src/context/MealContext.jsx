// context/MealContext.js
import React, { createContext, useState, useEffect } from "react";
import { fetchMealsByCategory, fetchMealByName } from "../api/meals";

export const MealContext = createContext();

export const MealContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMealsByCategory("Beef").then((data) => setMeals(data.meals));
  }, []);

  const searchMealsByName = async (name) => {
    try {
      const data = await fetchMealByName(name);
      setMeals(data.meals);
    } catch (error) {
      setMeals([]);
    }
  };

  return (
    <MealContext.Provider value={{ meals, searchMealsByName }}>
      {children}
    </MealContext.Provider>
  );
};
