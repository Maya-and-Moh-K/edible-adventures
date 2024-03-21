// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchMealByName } from "../api/meals";

// const SearchByName = () => {
//   const [query, setQuery] = useState("");
//   const [meals, setMeals] = useState([]);
//   const [error, setError] = useState("");
//   const history = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const searchedMeals = await fetchMealByName(query);

//       if (searchedMeals.length === 0) {
//         setError("No results found");
//         setMeals([]);
//       } else {
//         setMeals(searchedMeals);
//         setError("");
//       }
//     } catch (error) {
//       setError("An error occurred while fetching meals.");
//       setMeals([]);
//     }
//   };
//   const getIngredientsList = (meal) => {
//     let ingredientsList = [];
//     for (let i = 1; i <= 30; i++) {
//       if (meal[`strIngredient${i}`]) {
//         ingredientsList.push(
//           <li key={`ingredient-${i}`}>
//             {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
//           </li>
//         );
//       }
//     }
//     return ingredientsList;
//   };

//   return (
//     <div>
//       <h2>Search by Name</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter meal name"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {error && <p>{error}</p>}

//       {meals.length > 0 && (
//         <ul>
//           {meals.map((meal) => (
//             <li key={meal.idMeal}>
//               {meal.strMeal}
//               <img src={meal.strMealThumb} alt={meal.strMeal} />
//               <ul>{getIngredientsList(meal)}</ul>
//               {meal.strInstructions}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default SearchByName;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMealByName } from "../api/meals";
import Modal from "react-modal";

const SearchByName = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useNavigate();

  const openModal = (meal) => {
    setSelectedMeal(meal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedMeal(null);
    setModalIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const searchedMeals = await fetchMealByName(query);

      if (searchedMeals.length === 0) {
        setError("No results found");
        setMeals([]);
      } else {
        setMeals(searchedMeals);
        setError("");
      }
    } catch (error) {
      setError("An error occurred while fetching meals.");
      setMeals([]);
    }
  };

  const getIngredientsList = (meal) => {
    let ingredientsList = [];
    for (let i = 1; i <= 30; i++) {
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
      <h2>Search by Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter meal name"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}

      {meals.length > 0 && (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <button onClick={() => openModal(meal)}>View Details</button>
            </li>
          ))}
        </ul>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {selectedMeal && (
          <div>
            <h2>{selectedMeal.strMeal}</h2>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            <ul>{getIngredientsList(selectedMeal)}</ul>
            <p>{selectedMeal.strInstructions}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchByName;
