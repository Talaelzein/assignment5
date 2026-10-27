
# Assignment 5 - React Multi-Component Weather Dashboard

## Description

This project is a React version of my Assignment 4 Weather Dashboard.

It allows users to search for a city and view real-time weather information using the OpenWeatherMap API.

The application is built using React, JavaScript, CSS, and Vite.

## Features

- Search for weather by city name
- Display temperature in Celsius
- Display weather conditions and icons
- Display humidity and wind speed
- Show loading and error messages
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite
- OpenWeatherMap API

## Component Structure

The application is divided into five components:

- **App.jsx:** Main component that manages state and fetches weather data.
- **SearchBar.jsx:** Handles city input and search submission.
- **WeatherCard.jsx:** Displays weather information.
- **LoadingSpinner.jsx:** Displays a loading indicator.
- **ErrorMessage.jsx:** Displays error messages.

## React Hooks

### useState

The useState hook manages the city input, weather data, loading status, errors, and search requests.

### useEffect

The useEffect hook fetches weather data from the OpenWeatherMap API when a search is submitted.

### Props

Props are used to pass data and functions from App to child components.

State is managed in App, avoiding unnecessary prop drilling.

## Installation and Setup

1. Install Node.js.

2. Open the project folder in VS Code.

3. Open a terminal inside the project folder.

4. Install the dependencies:

   npm install

5. Create a file named `.env.local` in the project root.

6. Add your OpenWeatherMap API key:

   VITE_OPENWEATHER_API_KEY=YOUR_API_KEY_HERE

7. Start the development server:

   npm run dev

8. Open the localhost URL shown in the terminal.

If PowerShell blocks npm, use `npm.cmd install` and `npm.cmd run dev`.

## Build

To create the production build, run:

   npm run build

## Project Structure

src/
  components/
    SearchBar.jsx
    WeatherCard.jsx
    LoadingSpinner.jsx
    ErrorMessage.jsx
  App.jsx
  App.css
  index.css
  main.jsx

## Author

Tala El Zein
