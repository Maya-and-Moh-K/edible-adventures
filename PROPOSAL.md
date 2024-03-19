# Edible Adventures

Created by Maya Ramishun and Mohammed Kanoongo.

## 🚀 Mission statement

Our application, **Edible Adventures** is for **users who love making and eating new foods**. It allows users to **discover new recipes in any meal category**.

## API

This application will use the TheMealDB API. Below are the documentation and specific endpoints we intend to use.

<!-- Remember that you need one endpoint that gives you many things and from there get one thing -->
<!-- Which one of these is that? -->

- Link to API documentation: (https://www.themealdb.com/api.php)
  Main Endpoint: www.themealdb.com/api/json/v1/1/list.php?c=list
- www.themealdb.com/api/json/v1/1/search.php?s=
  - Name of the meal
- www.themealdb.com/api/json/v1/1/random.php
  - None, generates a random meal.
- www.themealdb.com/api/json/v1/1/filter.php?i=
  Takes a main ingredient and fetches results.

## 👩‍💻 MVP User Stories

The core features of the application include:

<!-- maybe also by category? -->

- Users can search meals by name.
- Users can generate a random meal.
- Users can search for meals by category.
<!-- will replace meal by main ingredient with category -->

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to view a video for each recipe.
- Users will be able to...
- Users will be able to...

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**

- [ ] Create Context (1 day)
- [ ] Create components
- [ ] Finish README
- [ ] Use Link to navigate between pages
- [ ] Experiment with non-submit events (brainstorming and implementing)

**Day 2**

- [ ] User will be able to search meals by name: we will have our components. We will add state for search query and filtered meals. Along with that, we will handle search input and submission. We will integrate the Search component. After that we will work on how to render the search results which will also include some basic styling at first, but more work on that later.

**Day 3**

- [ ] User will be able to generate a random meal : components are already set. The essentials of this are the same as searching meal by name, but there is no "search input" component. Rather, we will just try and utilize a form or button to render a random meal.

**Day 4**

- [ ] User will be able to search for meals by category: the essentials will be the same as searching meal by name.

**Day 5**

- [ ] Styling and other misc items
- [ ] Implement stretch goal

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

![Wireframe 1](wireframe-1.jpg)

![Wireframe 2](wireframe-2.jpg)
