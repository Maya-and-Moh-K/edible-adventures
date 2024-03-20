import React from "react";
export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="./">Random Meal</NavLink>
          </li>
          <li>
            <NavLink to="./search-by-name">Search by Name</NavLink>
          </li>
          <li>
            <NavLink to="./search-by-category">Search by Category</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
