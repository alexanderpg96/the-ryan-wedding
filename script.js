
const targetDate = new Date('September 5, 2026 15:00:00 PST');

function updateCountdown() {
const now = new Date().getTime();
const distance = targetDate - now; // in milliseconds

// If the countdown is finished or passed, stop updating
if (distance <= 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
    return;
}

// Calculate days, hours, minutes, seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((distance / (1000 * 60)) % 60);
const seconds = Math.floor((distance / 1000) % 60);

// Update the HTML
document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
}

// 2. Call updateCountdown() once to set initial values
updateCountdown();

// 3. Update every second
setInterval(updateCountdown, 1000);