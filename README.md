# Productivity Dashboard

A **modern, interactive dashboard** designed to help you stay organized, motivated, and productive throughout the day. Built with **HTML, CSS, and JavaScript**, this project combines task management, daily planning, motivational quotes, weather updates, and a Pomodoro timer—all in one sleek interface.

## Features

### 1. To-Do List
- Create, update, and delete tasks.
- Mark tasks as important.
- Tasks are stored locally using `localStorage`.

### 2. Daily Planner
- Plan your day hour by hour.
- Save your schedule in the browser with `localStorage`.
- Responsive layout for desktop and mobile.

### 3. Motivational Quotes
- Fetches a random quote daily from the **ZenQuotes API**.
- Stay inspired while working.

### 4. Pomodoro Timer
- Work in focused intervals (25 minutes) with short breaks.
- Start, pause, and reset functionality.
- Visual session indicators for Work and Break periods.

### 5. Weather Updates
- Displays current temperature, condition, wind, humidity, and heat index for your city.
- Real-time updates with Weather API integration.

### 6. Theme Toggle
- Switch between **light** and **dark** modes with a single click.

## Demo

![Dashboard Screenshot](./screenshot.png)  
*(Add a screenshot of your dashboard here for better visibility)*

## Technologies Used
- **HTML5** – Markup for the dashboard structure.
- **CSS3 & SCSS** – Styling, responsive design, and theme management.
- **JavaScript (ES6)** – Dynamic features like To-Do list, planner, Pomodoro timer, and API integrations.
- **APIs Used:**  
  - ZenQuotes API – Fetch motivational quotes.  
  - Weather API – Get real-time weather updates.

## Installation

1. Clone the repository:  
   git clone https://github.com/shahbazal0m/productivity-dashboard

2. Navigate to the project folder:
cd productivity-dashboard

3. Open index.html in your browser.

4. Add your Weather API key in config.js:
const WEATHER_API_KEY = "YOUR_API_KEY_HERE";


Usage

- To-Do List: Click the "To Do List" card → Add tasks → Mark as important → Save in local storage.

- Daily Planner: Click the "Daily Planner" card → Plan your day → Data saved automatically.

- Motivation: Click the "Motivation" card → Fetches a daily motivational quote.

- Pomodoro Timer: Click the "Pomodoro Timer" card → Start working in focused sessions.

- Daily Goals: Click the "Daily Goals" card → Track your goals for the day.

- Theme Toggle: Click the sun/moon icon to switch between light and dark modes.

Folder Structure
productivity-dashboard/
│
├── index.html
├── style.css
├── script.js
├── config.js         # Add your Weather API key here
├── Fonts/            # Custom fonts
├── icons/            # Icons used in the dashboard
└── README.md

Author

Shahbaz Alam

GitHub: https://github.com/shahbazal0m

LinkedIn: https://www.linkedin.com/in/iamshahbaz-alam/

"Stay productive, stay focused"