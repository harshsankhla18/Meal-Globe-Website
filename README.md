# 🌍 Meal Globe Website

A captivating interactive experience to explore global cuisines! Users can spin through a 3D globe of meal dishes and click on any to view full recipes fetched from [TheMealDB API](https://www.themealdb.com). Built with React, WebGL (WebGL2 + `gl-matrix`), and CSS animations.

---
<img width="1885" height="915" alt="image" src="https://github.com/user-attachments/assets/588772ac-01c7-403d-8390-f5414c89b92a" />

---
## 🚀 Live Demo

Check it out here: *https://meal-globe-website.netlify.app/*

---

## Created using React JS

---

## 🔧 Features

- **3D rotating globe of dishes** with smooth mouse drag rotation using a custom Arcball control in WebGL2.
- **Dynamic fetching** of recipe listings by cuisine (e.g., “Indian”, “American”) 
- **Click a dish** to seamlessly fetch & display full recipe details — including ingredients, instructions, and images
- **Clean, responsive UI** to present the globe, spinner, recipe card, and cuisine-selection navbar.

---

## 🛠️ Tech Stack

- 🔹 React (Functional Components, Hooks)
- 🔹 WebGL2 + GLSL + `gl-matrix` — for 3D instanced graphics
- 🔹 Axios — for API calls
- 🔹 CSS — for layout, responsive design, and visual effects

---

## ⚙️ Installation

1. **Clone the repo** 
   ```bash
   git clone https://github.com/harshsankhla18/Meal-Globe-Website.git
   cd Meal-Globe-Website
   ```
2. **Install dependencies**
   ```
   npm install
   ```
3. **Start Development server***
   ```
   npm start
   ```
4. Open your browser and visit http://localhost:3000

## 🧩 Project Structure

src/
├── Components/
│   └── InfiniteMenu/       # Main spinning globe + recipe modal
├── Navbar/                 # Cuisine selector component
├── App.jsx                 # Main application entry & state handling
└── index.js                # React DOM bootstrap

public/
└── index.html

## 👉 Usage
1. Select a cuisine from the navbar (e.g., "Indian").

2. The globe populates with dishes from that cuisine.

3. Drag or rotate your mouse to spin and inspect.

4. Hover shows the dish title; click the 🔍 icon to reveal the recipe.

5. The recipe card displays instructions, ingredients, and more.

6. Click the X in the card to close it and return to the globe.

## 🏗️ Custom Implementation Highlights
1. InfiniteGridMenu handles instanced WebGL rendering of circular disks (disc geometry).

2. Arcball rotating via pointer events, with inertia and snapping to highlight dishes.

3. Texture atlas creation using an offscreen canvas to pack dish images efficiently.

4. React state controls selected dish and fetches recipe details with Axios.

5. Pure CSS modals for recipe overlay, hover animations, and responsive UI.

Made with ❤️ by Harsh Sankhla
BTech @ IIIT Bhagalpur
