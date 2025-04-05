# 🎯 movieSCAPE | Movie Search App 🎥🔎🎞️ 
### Full-Featured Movie Search Application Using React 🎬✨🚀⚛️
A powerful movie search application built with React, integrated seamlessly with the OMDB API. This application allows users to:
- **Search for Movies**
- **View Detailed Information**
- **Manage a List of Favorites**

---

## Features ⚡
✨ **OMDB API Integration** - Fetch Movies Effortlessly with Real-Time Search and Detailed Information. <br/>
🔍 **Dynamic Search Bar** : Search by Movie Titles or Keywords for Quick Results.  <br/>
🖼️ **Responsive Display** : View Search Results in a Clean Grid Format with Movie Posters, Titles, and Summaries.  <br/> 
➡️ **Smart Pagination** : Navigate Large Search Results Smoothly. <br/> 
🎞️ **Detailed Movie View** : Dive into Movie Details such as Movie Posters, Release Year, Genre, Plot, Ratings, and Cast.  <br/> 
🔧 **Advanced Filtering** : Filter Movies by Type Using API Endpoints (No array Filters).  <br/> 
❤️ **Add & Manage Favorites** : Save and Manage Favorite Movies Easily.  <br/> 
🗺️ **Seamless Navigation** : Enjoy Smooth Transitions with React Router between Search, Movie Detail & Favourite Movie List Pages.  <br/> 
🚨 **Error Handling** : Displays User-Friendly Messages for API Errors and No-Results Scenarios.

---

## Built With 🛠️
⚛️ **ReactJS** – For Dynamic User Interface.  <br/>
🔗 **React Router** – For Seamless Navigation Between Pages.  <br/>
🌐 **HTML/CSS & Tailwind CSS** – For Styling & Responsive Design.  <br/>
🖥️ **JavaScript** – For Functionality.

---

## Deployed App 🚀 
#### For Live Demo Click the Below Link ⬇️ <br/>
🌐 Live URL : https://sami-moviescape.netlify.app/ 

---

## Folder Structure 🗂️

```bash
MOVIESCAPE/
├── node_modules/          # Dependencies
├── public/                # Public Assets
│   └── favicon            # Favicon for the application
├── src/                   # Source File
│   ├── assets/            # Assets (Images)
│   ├── components/        # Reusable UI components
│   │   ├── index.jsx      # Header component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Card.jsx       # Card component
│   │   ├── StreamCard.jsx # StreamCard component
│   │   └── Header.jsx     # Entry Point for Components
│   ├── context/           # React Context for State Management
│   │   ├── FavouritesContext.jsx # Manages Favourite Movies
│   │   └── StreamsContext.jsx    # Manages Streaming Data
│   ├── pages/                    # Page Components
│   │   ├── index.js              # Entry point for Pages
│   │   ├── Home.jsx              # Home Page
│   │   ├── About.jsx             # About Page
│   │   ├── ErrorPage.jsx         # Error Page
│   │   ├── Streams.jsx           # Streams Page
│   │   ├── MovieList.jsx         # Movie List Page
│   │   ├── MovieDetails.jsx      # Movie Details Page
│   │   ├── SearchPage.jsx        # Search Results Page
│   │   └── Favourites.jsx        # Favourites Page
│   ├── utilities/                # Utility Functions
│   │   ├── ScrollTop.jsx         # Scroll to Top Component
│   │   └── StreamsScroll.jsx     # Scrollable Streams Component
│   ├── App.jsx         # Root Application Component
│   ├── index.css       # Global Styles
│   └── main.jsx        # Entry point for Application
├── index.Html          # Main HTML File
├── README.md           # Readme File
├── .env                # Environment Variables
├── .gitignore          # Files and directories to ignore in Git
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency lock file
├── vite.config.js      # Vite build tool configuration
└── eslintrc.config.js  # ESLint configuration

```

---
  
## Project Configurations ⚙️

### 📦 1. Create React Project with Vite
```bash
 npm create vite@latest
```
Fast, efficient, and ready to go! ⚡

---

### 🎨 2. Install Tailwind CSS
##### Install Tailwind & Vite Plugin:
```bash
npm install tailwindcss @tailwindcss/vite
```
For stunning, responsive designs! ✨

---

### ⚙️ 3. Configure Tailwind as Vite Plugin
##### Update Vite Config:
```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
Seamless integration for smooth styling. 🖌️

---

### 📄 4. Import Tailwind CSS
##### Add in Your CSS File:
```bash
@import "tailwindcss";
```
Let the styling magic begin! 🌈

---

### 🌐 5. Install React Router Dom
```bash
 npm install react-router-dom
```
For smooth, dynamic page navigation! 🚀

---

### 🔄 6. Install React Loading Indicators
```bash
 npm install react-loading-indicators
```
Show loading states like a pro! ⏳

---

### 🏗️ 7. Run the Project in Development Mode
##### Run Build process with 'npm run dev' 
```bash
  npm run dev
```
See your app come to life! 💻✨

---

<h3 align= 'center' style="color: fuchsia"><b>👀 Thanks for Exploring My Repository! 💖</b></h3>
