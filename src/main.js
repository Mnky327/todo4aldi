// ================= DATE HANDLING =================

const dayElement = document.getElementById("current-day");
const dateElement = document.getElementById("current-date");

if (dayElement && dateElement) {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  dayElement.textContent = dayName;
  dateElement.textContent = `${day}.${month}.${year}`;
}

const init = () => {
    console.log('welcome to ALDI')
}

init();
