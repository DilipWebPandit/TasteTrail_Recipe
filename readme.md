# 🍴 TasteTrail

### _Follow your flavor trail_

Welcome to the **Recipe Explorer Website** — a simple and interactive platform where users can explore delicious recipes based on different food categories.
A modern recipe discovery website where users explore delicious dishes by category — Chicken, Cakes, Pizza, Rice, Wheat — and view detailed recipes with cooking instructions. Built using **HTML**, **CSS**, **JavaScript**, and a **public food API**, this project demonstrates how to fetch and display data dynamically.

---

## 🚀 Features

- 🧭 **Category Selection:**  
  When users open the website, they can see food categories like:

  - Chicken 🍗
  - Cakes 🍰
  - Pizza 🍕
  - Rice 🍚
  - Wheat 🌾

- 🖱️ **Interactive Category Click:**  
  Clicking on a category displays a list of related dishes fetched from a food API.

- 📖 **Recipe Details:**  
  Each dish includes a “View Recipe” button.  
  Clicking it shows the recipe details such as:

  - Ingredients
  - Cooking Instructions
  - Dish Image

- ⚡ **API Integration:**  
  All recipe data is dynamically fetched from a public **Meal/Recipe API** (like [TheMealDB](https://www.themealdb.com)).

---

## 🛠️ Technologies Used

| Technology            | Purpose                                   |
| --------------------- | ----------------------------------------- |
| **HTML5**             | Structure and layout of the website       |
| **CSS3**              | Styling and responsiveness                |
| **JavaScript (ES6)**  | Dynamic interactivity and API handling    |
| **Public Recipe API** | Fetching food and recipe data dynamically |

---

## 🧩 Project Structure

- **recipe-website/**
  - 📄 **index.html**
    - Displays all food **categories** (e.g., Chicken, Cakes, Pizza, etc.)
    - Shows **recipes** based on the selected category
    - Allows users to **view recipe details** (ingredients & instructions)
  - ⚙️ **index.js**
    - Detects clicks on categories and recipes
    - Fetches data from the recipe API
    - Dynamically updates the page content
  - 🧾 **README.md**
    - Contains project documentation
