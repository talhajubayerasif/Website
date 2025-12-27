// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Load saved theme
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️"; // Sun icon for light mode
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
        localStorage.setItem("theme", "light");
    }
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Check if scrolled more than 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});