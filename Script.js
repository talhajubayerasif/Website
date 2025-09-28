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