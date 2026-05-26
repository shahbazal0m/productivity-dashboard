# Pro Dashboard | Shahbaz Alam

A **modern, interactive productivity dashboard** designed to help you stay organized, motivated, and focused throughout the day. Built with **HTML, CSS, and JavaScript** — no frameworks, just clean vanilla code.

---

## Features

### ✅ To-Do List
- Add tasks with details and mark them as important
- Tasks persist across sessions using `localStorage`
- Delete tasks by marking them as completed

### 📅 Daily Planner
- Plan your day hour by hour (6 AM – 11 PM)
- Auto-saves to `localStorage` — no data lost on refresh
- Clean 2-column grid layout

### 💬 Motivational Quotes
- Fetches a random quote from **FreeAPI Quotes**
- Fallback quotes if API is unavailable
- Beautiful card design with author attribution

### ⏱️ Pomodoro Timer
- 25-minute work sessions with 5-minute breaks
- Start, Pause, and Reset controls
- Auto-switches between Work Session and Break

### 🌤️ Weather Widget
- Real-time weather for **Bhopal, MP**
- Shows temperature, condition, humidity, wind, and heat index
- Powered by **WeatherAPI**

### 🎯 Daily Goals
- Set and track your daily goals separately from tasks
- Mark as important, add details, save to `localStorage`

### 🌙 Theme Toggle
- Switch between **dark** and **light** mode instantly
- Sun/moon icon in the navbar

### 📱 Mobile Swipe Support
- Integrated **Swiper.js** for smooth mobile card navigation
- Touch-friendly swipe gestures
- Pagination dots for better UX
- Desktop uses normal horizontal scroll while mobile switches to Swiper slider automatically
---

## Technologies Used

| Technology | Usage |
|---|---|
| HTML5 | Dashboard structure |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6) | All dynamic features and API calls |
| Swiper.js | Mobile swipe slider |
| WeatherAPI | Real-time weather data |
| FreeAPI Quotes | Motivational quotes |
| localStorage | Data persistence |

---

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/shahbazal0m/productivity-dashboard
```

2. **Navigate to the project folder:**
```bash
cd productivity-dashboard
```

3. **Add your Weather API key in `config.js`:**
```js
const WEATHER_API_KEY = "YOUR_API_KEY_HERE";
```
> Get your free API key at [weatherapi.com](https://www.weatherapi.com)

4. **Swiper CDN**
```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

4. **Open `index.html` in your browser** — done!

---

## 📖 Usage

| Feature | How to use |
|---|---|
| To-Do List | Click card → Add task → Mark important → Auto-saved |
| Daily Planner | Click card → Fill time slots → Auto-saved |
| Motivation | Click card → Quote loads automatically |
| Pomodoro Timer | Click card → Start → Work 25 min → Break 5 min |
| Daily Goals | Click card → Add goals → Track progress |
| Theme Toggle | Click sun/moon icon in navbar |

---

## 📁 Folder Structure

```
productivity-dashboard/
│
├── index.html          
├── style.css           
├── script.js           
├── config.js           
├── Fonts/              
│   ├── AeonikTRIAL-Light.otf
│   ├── AeonikTRIAL-Bold.otf
│   └── AeonikTRIAL-Regular.otf
└── README.md
```

---

## 📱 Responsive Design

| Screen | Breakpoint |
|---|---|
| Desktop | > 1024px |
| Tablet | ≤ 1024px |
| Mobile | ≤ 768px |
| Small Mobile | ≤ 480px |

---

## 👨‍💻 Author

**Shahbaz Alam**

### 🌐 Connect with Me

[![GitHub](https://img.shields.io/badge/GitHub-shahbazal0m-181717?style=flat&logo=github)](https://github.com/shahbazal0m)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-iamshahbaz--alam-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/iamshahbaz-alam/)
[![Twitter](https://img.shields.io/badge/Twitter-shahbaz__al0m-1DA1F2?style=flat&logo=twitter)](https://x.com/shahbaz_al0m)

---

# Project Highlights

- Fully Responsive UI
- Smooth Mobile Swiping
- Clean Modern Design
- LocalStorage Integration
- API Integration
- Vanilla JavaScript Only
- Productivity Focused Dashboard

---

> *"Stay productive, stay focused"*