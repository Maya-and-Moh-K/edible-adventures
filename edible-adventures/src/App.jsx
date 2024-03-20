import { useState } from 'react';
import './App.css';
import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchByName from './components/SearchByName';
import SearchByCategory from './components/SearchByCategory';
import RandomMeal from './components/RandomMeal';
import MealList from './components/MealList';
import MealDetail from './components/MealDetail';
import { MealContextProvider } from "./context/MealContext";

function App() {
  return (
    <Routes>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/">
            <RandomMeal />
          </Route>
          <Route path="/search-by-name">
            <SearchByName />
          </Route>
          <Route path="/search-by-category">
            <SearchByCategory />
          </Route>
          <Route path="/meal/:id">
            <MealDetail />
          </Route>
          <Route path="/meals">
            <MealList />
          </Route>
        </div>
      </Router>
    </Routes>
  );
}

export default App