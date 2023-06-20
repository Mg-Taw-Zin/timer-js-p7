const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let interval;
let timeLeft = 1800;
function updateTimer() {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;
  let formattedTime = `${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;
  timer.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's Up");
      timeLeft = 1800;
    }
    start.classList.add("disable");
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
  start.classList.remove("disable");
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1800;
  updateTimer();
  start.classList.remove("disable");
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
