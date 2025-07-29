🍿 usePopcorn Movie App

usePopcorn is a responsive React application that allows users to search for movies, view detailed information, and maintain a personal list of watched movies with their own ratings. This project was built to practice fundamental and advanced React concepts, including component composition, state management with hooks (useState, useEffect), and handling asynchronous API calls.


## ✨ Features
Real-time Movie Search: Instantly search for movies from the OMDb API as you type.

Detailed Information: Click on a movie to view its plot, poster, runtime, cast, director, and IMDb rating.

Custom Star Rating: A reusable StarRating component to rate movies from 1 to 10.

Personal Watched List: Add movies you've seen to a persistent list.

Watched List Summary: Get a quick overview of your viewing stats, including the number of movies watched, your average rating, the average IMDb rating, and the average runtime.

Delete from Watched: Remove movies from your watched list.

Loading & Error States: A clean user experience with dedicated UI states for loading data and handling API errors (e.g., "Movie not found").

Keyboard Navigation: Press the Escape key to close the movie details view.

Dynamic Document Title: The browser tab title updates to the name of the movie you're viewing.

## 🛠️ Technologies Used
React.js: Core library for building the user interface.

React Hooks: useState for state management, useEffect for handling side effects (API calls, event listeners).

OMDb API: External API for fetching all movie data.

JavaScript (ES6+): For application logic, including asynchronous operations (async/await).

CSS: For styling the application.

## 🚀 Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
You need to have Node.js and npm installed on your machine.

Node.js

### Installation & Setup
Clone the repository:

Bash

git clone https://github.com/shoaib713343/usepopcorn
Navigate to the project directory:

Bash

cd usepopcorn-app
Install NPM packages:

Bash

npm install
Set up your API Key:
The application requires an API key from OMDb.

Get your free API key at omdbapi.com/apikey.aspx.

In the src/App.js file, replace the placeholder key with your own:

JavaScript

// In src/App.js
const KEY = "your_api_key_here";
Run the application:

Bash

npm start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser.

## 📜 Available Scripts
In the project directory, you can run:

npm start - Runs the app in development mode.

npm test - Launches the test runner in interactive watch mode.

npm run build - Builds the app for production to the build folder.