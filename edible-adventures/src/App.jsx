import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchByName from './components/SearchByName';
import SearchByCategory from './components/SearchByCategory';
import RandomMeal from './components/RandomMeal';
import MealList from './components/MealList';
import MealDetail from './components/MealDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RandomMeal />}></Route>
        <Route path="/search-by-name" element={<SearchByName />}></Route>
        <Route
          id="filler"
          path="/search-by-category"
          element={<SearchByCategory />}
        ></Route>
        <Route path="/meal/:id" element={<MealDetail />}></Route>
        <Route path="/meals" element={<MealList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
