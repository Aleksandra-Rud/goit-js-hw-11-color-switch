
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervlId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener('click', onStartBtn)
refs.stop.addEventListener('click', onStopBtn)


function onStartBtn() {
    setInterval(() => {
        const changeColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

        // document.body.style.backgroundColor = changeColor;
        document.body.style.backgroundColor = getRandomColor();

    }, 1000);

    refs.start.disabled = true;
}

function onStopBtn() {
    clearInterval(intervlId)
    refs.start.disabled = false;
}

function getRandomColor() {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0})`;
}

