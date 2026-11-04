// ==============================
// ELEMENTS
// ==============================

const countdownScreen = document.getElementById("countdownScreen");
const revealScreen = document.getElementById("revealScreen");
const mainScreen = document.getElementById("mainScreen");

const enterButton = document.getElementById("enterSurprise");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// ==============================
// TEST COUNTDOWN: 10 SECONDS
// ==============================

// Testing ke liye 10 seconds
const birthdayDate = new Date("November 11, 2026 00:00:00").getTime();


// ==============================
// COUNTDOWN FUNCTION
// ==============================

function updateCountdown() {

    const currentTime = Date.now();

    const distance = birthdayDate - currentTime;

    if (distance <= 0) {

        clearInterval(countdownInterval);

        countdownScreen.classList.add("hidden");
        revealScreen.classList.remove("hidden");

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.ceil(
        (distance % (1000 * 60)) / 1000
    );

    daysElement.textContent = String(days).padStart(2, "0");

    hoursElement.textContent = String(hours).padStart(2, "0");

    minutesElement.textContent = String(minutes).padStart(2, "0");

    secondsElement.textContent = String(seconds).padStart(2, "0");

}


// ==============================
// START COUNTDOWN
// ==============================

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 250);


// ==============================
// ENTER MAIN WEBSITE
// ==============================

enterButton.addEventListener("click", function () {

    revealScreen.classList.add("hidden");

    mainScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});