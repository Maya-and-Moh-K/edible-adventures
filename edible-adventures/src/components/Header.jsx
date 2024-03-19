import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Random Meal</Link>
          </li>
          <li>
            <Link to="/search-by-name">Search by Name</Link>
          </li>
          <li>
            <Link to="/search-by-category">Search by Category</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
