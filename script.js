document.addEventListener("DOMContentLoaded", () => {
    // Reveal elements on scroll
    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {
        reveals.forEach((element) => {
            const top = element.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();

    // Lightning and Rain Logic
    const lightning = document.querySelector(".lightning");
    const rain = document.querySelector(".rain");

    function thunder() {
        lightning.classList.add("flash");
        rain.style.opacity = ".8";

        setTimeout(() => {
            rain.style.opacity = ".3";
        }, 300);

        setTimeout(() => {
            lightning.classList.remove("flash");
        }, 250);

        const nextFlash = Math.random() * 15000 + 5000;
        setTimeout(thunder, nextFlash);
    }

    setTimeout(thunder, 5000);

    // Parallax Effect for Hero
    const hero = document.querySelector(".hero");
    const hotel = document.querySelector(".hotel");
    const heroContent = document.querySelector(".hero-content");

    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;

        if (hotel) {
            hotel.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
        }
        if (heroContent) {
            heroContent.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
        }
    });
});
