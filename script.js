// script.js
let randomNumberInterval;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startRandomNumber() {
    randomNumberInterval = setInterval(() => {
        const randomNumber = getRandomNumber(1, 30);
        document.getElementById('random-number').textContent = `generando numero de la suerte: ${randomNumber}`;
    }, 100);
}

function stopRandomNumber() {
    clearInterval(randomNumberInterval);
}

document.getElementById('start-button').addEventListener('click', startRandomNumber);
document.getElementById('stop-button').addEventListener('click', stopRandomNumber);
