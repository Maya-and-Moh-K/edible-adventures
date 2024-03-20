import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { SearchByName } from "./components/SearchByName";
import { SearchByCategory } from "./components/SearchByCategory";
import { RandomMeal } from "./components/RandomMeal";
import { MealList } from "./components/MealList";
import { MealDetail } from "./components/MealDetail";
import { MealContextProvider } from "./context/MealContext";
import "./App.css";

function App() {
  return (
    <MealContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
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
          </Switch>
        </div>
      </Router>
    </MealContextProvider>
  );
}

export default App;
