const btn = document.getElementById('no');
const btn2 = document.getElementById('yes');
const container = document.getElementById('container');
const padding = 10;

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

btn.style.position = "absolute";
btn.style.left = `${x}px`;
btn.style.top = `${y}px`;

window.addEventListener('resize', () => {
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    x = Math.max(padding, Math.min(x, maxX));
    y = Math.max(padding, Math.min(y, maxY));

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

btn.addEventListener('mouseenter', () => {
    const distance = 180;

    const directionX = Math.random() < 0.5 ? -1 : 1;
    const directionY = Math.random() < 0.5 ? -1 : 1;

    x += directionX * distance;
    y += directionY * distance;

    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const minX = padding;
    const minY = padding;

    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

let heartInterval;

btn2.addEventListener('click', () => {
    container.innerHTML = '<h1>HAPPY ANNIVERSARY, MY LOVE!\n\nI LOVE YOU MOST!!!</h1>';

    const h1 = container.querySelector('h1');
    h1.style.whiteSpace = 'pre-line';

    container.style.backgroundColor = '#ff69b4';
    container.style.color = 'white';
    container.style.fontSize = '2em';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    // stop old interval if exists
    clearInterval(heartInterval);

    heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';

        const x = Math.random() * container.offsetWidth;
        const y = container.offsetHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.style.fontSize = `${12 + Math.random() * 25}px`;
        heart.style.animationDuration = `${1 + Math.random()}s`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }, 150); // speed of spawning hearts
});