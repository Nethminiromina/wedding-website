AOS.init({
    duration: 1400,
    once: true,
    easing: 'ease-out'
});

// Countdown Timer Logic with tick animation when digits change
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
    const weddingDate = new Date("May 22, 2026 18:30:00").getTime();
    let prevDays = -1, prevHours = -1, prevMins = -1, prevSecs = -1;

    function tickBox(box) {
        if (!box) return;
        box.classList.remove('countdown-tick');
        box.offsetHeight; /* trigger reflow */
        box.classList.add('countdown-tick');
        setTimeout(function () { box.classList.remove('countdown-tick'); }, 200);
    }

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("mins");
        const secsEl = document.getElementById("secs");

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) { daysEl.innerText = d; if (d !== prevDays) { prevDays = d; tickBox(daysEl.closest('.time-box')); } }
        if (hoursEl) { hoursEl.innerText = h; if (h !== prevHours) { prevHours = h; tickBox(hoursEl.closest('.time-box')); } }
        if (minsEl) { minsEl.innerText = m; if (m !== prevMins) { prevMins = m; tickBox(minsEl.closest('.time-box')); } }
        if (secsEl) { secsEl.innerText = s; if (s !== prevSecs) { prevSecs = s; tickBox(secsEl.closest('.time-box')); } }

        if (distance < 0) {
            clearInterval(timer);
            countdownEl.innerHTML = "<h3>Happening Now!</h3>";
        }
    }, 1000);
}

// RSVP Form Animation (only if form exists on page)
const weddingForm = document.getElementById('weddingForm');
if (weddingForm) {
    weddingForm.onsubmit = function (e) {
        e.preventDefault();
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#e8a500', '#8B0000', '#D4AF37']
            });
        }
        alert("Thank you! We've received your RSVP.");
    };
}

// RSVP link: confetti then open form
const rsvpLink = document.getElementById('rsvp-link');
if (rsvpLink && typeof confetti === 'function') {
    rsvpLink.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#e8a500', '#8B0000', '#D4AF37']
        });
        setTimeout(function () {
            window.open(url, '_blank');
        }, 400);
    });
}

// Back to top button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
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
}