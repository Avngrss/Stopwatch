const counterBody = document.querySelector("#counter");
const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnStop = document.querySelector("#stop");

let counter = 0;
let timerID;

btnStart.addEventListener("click", () => {
  timerID = setInterval(() => {
    counter++;
    counterBody.innerText = counter;
  }, 1000);
});

btnPause.addEventListener("click", () => {
  clearInterval(timerID);
});

btnStop.addEventListener("click", () => {
  counter = 0;
  counterBody.innerText = counter;
  clearInterval(timerID);
});
