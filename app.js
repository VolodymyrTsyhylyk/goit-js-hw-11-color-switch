const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
  startButton: document.querySelector('[data-action = "start"]'),
  stoptButton: document.querySelector('[data-action = "stop"]'),
  changeBody: document.querySelector('body'),
};

const min = 0;
const max = colors.length - 1;
let intervalId = null;

ref.startButton.addEventListener('click', startColorChange);
ref.stoptButton.addEventListener('click', stopColorChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
  if (ref.startButton.disabled) {
    return;
  }
  intervalId = setInterval(() => {
    console.log(`start interval ${Date.now()}`);
    colorChange();
    ref.startButton.disabled = true;
  }, 1000);
}

function stopColorChange() {
  clearInterval(intervalId);

  ref.startButton.disabled = false;
}

function colorChange() {
  const color = colors[randomIntegerFromInterval(min, max)];
  ref.changeBody.style.backgroundColor = color;
}

// console.log('Hello');
