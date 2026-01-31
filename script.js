let ms = 0, sec = 0, min = 0;
let timer = null;
let lapCount = 1;

function updateDisplay() {
  document.getElementById("display").innerText =
    `${String(min).padStart(2,"0")} : ${String(sec).padStart(2,"0")} : ${String(ms).padStart(2,"0")}`;
}

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    ms++;
    if (ms === 100) {
      ms = 0;
      sec++;
    }
    if (sec === 60) {
      sec = 0;
      min++;
    }
    updateDisplay();
  }, 10);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  ms = sec = min = 0;
  lapCount = 1;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (timer === null) return;

  const li = document.createElement("li");
  li.innerText = `Lap ${lapCount++} → ${display.innerText}`;
  document.getElementById("laps").appendChild(li);
}
