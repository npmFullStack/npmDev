function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const icon = document.getElementById("sidebarIcon");
    const title = document.querySelector(".sidebar h1");
    const subtitle = document.querySelector(".sidebar h2");
    const container = document.querySelector(".container");

    sidebar.classList.toggle("minimized");
    icon.classList.toggle("fa-chevron-right");
    icon.classList.toggle("fa-chevron-left");

    if (sidebar.classList.contains("minimized")) {
        title.innerHTML = "<span style='color: #00ffcc;'>N</span>PM";
        subtitle.style.display = "none";
        container.style.marginLeft = "80px";
    } else {
        title.textContent = "Portfolio";
        subtitle.textContent = "Norway's";
        subtitle.style.display = "block";
        container.style.marginLeft = "250px";
    }
}

function toggleDarkMode() {
    const body = document.body;
    const darkModeIcon = document.getElementById("darkModeToggle");
    document.body.classList.toggle("dark");

    darkModeIcon.classList.toggle("fa-moon");
    darkModeIcon.classList.toggle("fa-sun");
}

function applyTypewriterEffect(text) {
    const typewriterElement = document.getElementById("typewriterText");
    typewriterElement.textContent = text;
    typewriterElement.style.width = "0";
    typewriterElement.style.animation = "none";

    const steps = text.length * 2;

    setTimeout(() => {
        typewriterElement.style.animation = `typing 2s steps(${steps}) 1s forwards`;
    }, 20);
}

function changeText() {
    let currentText = "Full-Stack Web Developer";
    applyTypewriterEffect(currentText);

    setInterval(() => {
        currentText =
            currentText === "Full-Stack Web Developer"
                ? "Mobile Developer"
                : "Full-Stack Web Developer";
        applyTypewriterEffect(currentText);
    }, 3800);
}

document.addEventListener("DOMContentLoaded", function () {
    changeText();

    document.getElementById("btn-about").addEventListener("click", function () {
        document.getElementById("about-me").style.display = "flex";
        document.getElementById("my-skills").style.display = "none";
        this.classList.add("active");
        document.getElementById("btn-skills").classList.remove("active");
    });

    document
        .getElementById("btn-skills")
        .addEventListener("click", function () {
            document.getElementById("about-me").style.display = "none";
            document.getElementById("my-skills").style.display = "flex";
            this.classList.add("active");
            document.getElementById("btn-about").classList.remove("active");
        });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll(
            ".project-item, .skill-card"
        );
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.animation = "fadeIn 0.5s forwards";
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// Add this to your existing script.js
document.addEventListener("DOMContentLoaded", function () {
    // ... existing code ...

    // Mobile menu toggle
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (for mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
