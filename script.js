function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}

openFeatures();


function weatherFunctionality() {
  var apiKey = WEATHER_API_KEY; 
  var city = "Bhopal";

  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  var precipitation = document.querySelector(".header2 .Precipitation");
  var humidity = document.querySelector(".header2 .Humidity");
  var wind = document.querySelector(".header2 .Wind");

  var data = null;

  async function weatherAPICall() {
    try {
      var response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      data = await response.json();

      header2Temp.innerHTML = `${data.current.temp_c}°C`;
      header2Condition.innerHTML = `${data.current.condition.text}`;
      wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
      humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
      precipitation.innerHTML = `Heat Index : ${data.current.heatindex_c}%`;
    } catch (error) {
      console.error("Weather API call failed:", error);
      header2Condition.innerHTML = "Error fetching weather";
    }
  }

  function timeDate() {
    const totalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var date = new Date();
    var dayOfWeek = totalDaysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var tarik = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    header1Date.innerHTML = `${tarik} - ${month} - ${year}`;

    if (hours > 12) {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )} PM`;
    } else {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )} AM`;
    }
  }

  weatherAPICall();
  timeDate();

  setInterval(timeDate, 1000);
}

weatherFunctionality();



function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");

    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum =
      sum +
        `<div class="task">
            <div class="task-info">
              <h5>${elem.task} <span class="${elem.imp}">imp</span></h5>
              ${elem.details ? `<p class="task-detail">${elem.details}</p>` : ""}
            </div>
            <button id=${idx}>Mark as Completed</button>
      </div>`;
    });

    allTask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    var markCompletedBtn = document.querySelectorAll(".task button");

    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }

  renderTask();

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });

    renderTask();

    taskCheckbox.checked = false;
    taskInput.value = "";
    taskDetailsInput.value = "";
  });
}

todoList();


function dailyPlanner() {
  var dayPlanner = document.querySelector(".day-planner");

  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var hours = Array.from({ length: 18 }, function (elem, idx) {
    return `${6 + idx}:00 - ${7 + idx}:00`;
  });

  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || "";

    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time">
        <p>${elem}</p>
        <input id=${idx} type="text" placeholder="..." value = ${savedData}>
    </div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  var dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();


function motivationalQuote() {
  var motivationQuoteContent = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    try {
      let response = await fetch("https://quotes.freeapi.app/api/v1/public/quotes/quote/random");
      let data = await response.json();

      motivationQuoteContent.textContent = data.data.content;
      motivationAuthor.textContent = `— ${data.data.author}`;
    } catch (error) {
      console.error("Error fetching quote:", error);
      // Fallback quotes agar API fail ho jaye
      var fallbackQuotes = [
        { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
        { q: "It always seems impossible until it's done.", a: "Nelson Mandela" },
        { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson" },
        { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
      ];
      var random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      motivationQuoteContent.textContent = random.q;
      motivationAuthor.textContent = `— ${random.a}`;
    }
  }

  fetchQuote();
}

motivationalQuote();


function pomodoroTimer() {
  let timer = document.querySelector(".pomo-timer h1");
  var startBtn = document.querySelector(".pomo-timer .start-timer");
  var pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  var resetBtn = document.querySelector(".pomo-timer .reset-timer");
  var session = document.querySelector(".pomodoro-fullpage .session");
  var isWorkSession = true;

  let totalSeconds = 25 * 60;
  let timerInterval = null;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(
      seconds
    ).padStart("2", "0")}`;
  }

  function startTimer() {
    clearInterval(timerInterval);

    if (isWorkSession) {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          timer.innerHTML = "05:00";
          session.innerHTML = "Take aBreak";
          session.style.backgroundColor = "var(--blue)";
          totalSeconds = 5 * 60;
        }
      }, 1000);
    } else {
      timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          timer.innerHTML = "25:00";
          session.innerHTML = "Work Session";
          session.style.backgroundColor = "var(--green)";
          totalSeconds = 25 * 60;
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    updateTimer();
  }
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();



function goalsList() {
  var currentGoals = [];
 
  if (localStorage.getItem("currentGoals")) {
    currentGoals = JSON.parse(localStorage.getItem("currentGoals"));
  }
 
  function renderGoals() {
    let allGoals = document.querySelector(".allGoals");
 
    let sum = "";
    currentGoals.forEach(function (elem, idx) {
      sum += `<div class="task">
        <div class="task-info">
          <h5>${elem.task} <span class="${elem.imp}">imp</span></h5>
          ${elem.details ? `<p class="task-detail">${elem.details}</p>` : ""}
        </div>
        <button id="${idx}">Mark as Completed</button>
      </div>`;
    });
 
    allGoals.innerHTML = sum;
    localStorage.setItem("currentGoals", JSON.stringify(currentGoals));
 
    document.querySelectorAll(".allGoals .task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentGoals.splice(btn.id, 1);
        renderGoals();
      });
    });
  }
 
  renderGoals();
 
  let form = document.querySelector(".daily-goals-fullpage .addTask form");
  let goalInput = document.querySelector("#goal-input");
  let goalDetails = document.querySelector(".daily-goals-fullpage textarea");
  let goalCheckbox = document.querySelector("#goal-check");
 
  form.addEventListener("submit", function (e) {
    e.preventDefault();
 
    if (!goalInput.value.trim()) return;
 
    currentGoals.push({
      task: goalInput.value,
      details: goalDetails.value,
      imp: goalCheckbox.checked,
    });
 
    renderGoals();
 
    goalInput.value = "";
    goalDetails.value = "";
    goalCheckbox.checked = false;
  });
}
 
goalsList();


function themeToggle() {
  const themeBtn = document.querySelector(".theme");
  const icon = themeBtn.querySelector("i");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      icon.classList.remove("ri-sun-line");
      icon.classList.add("ri-moon-line");
    } else {
      icon.classList.remove("ri-moon-line");
      icon.classList.add("ri-sun-line"); 
    }
  });
}

themeToggle();

