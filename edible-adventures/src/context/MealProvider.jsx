import { useState, useEffect } from "react";
import MealContext from "./MealContext";
import { handleFetch } from '../utils.jsx';

const MealProvider = ({ children }) => {

  const [meal, setMeal] = useState([]);
  
  useEffect(() => {
    async function doFetch() {
      const data = await handleFetch('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
      setMeal(data.meal);
    }
    doFetch();
  }, []);

  const contextValues = { meal } // this object is returned by useContext(ProductsContext)

  return (
    <MealContext.Provider value={contextValues}>
      {children}
    </MealContext.Provider>
  )
}

export default MealProvider;