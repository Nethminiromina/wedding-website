AOS.init({
    duration: 1200,
    once: true
});

// Countdown Timer Logic
const weddingDate = new Date("May 22, 2026 18:30:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("mins").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("secs").innerText = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h3>Happening Now!</h3>";
    }
}, 1000);

// RSVP Form Animation
document.getElementById('weddingForm').onsubmit = function (e) {
    e.preventDefault();
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB300', '#8B0000', '#D4AF37']
    });
    alert("Thank you! We've received your RSVP.");
};

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};