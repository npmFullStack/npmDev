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

// Update your existing script.js with these changes

document.addEventListener("DOMContentLoaded", function () {
    changeText();

    // Function to handle section switching
    function showAboutMe() {
        document.getElementById("about-me").style.display = "flex";
        document.getElementById("my-skills").style.display = "none";
        document.getElementById("btn-about").classList.add("active");
        document.getElementById("btn-skills").classList.remove("active");
    }

    function showMySkills() {
        document.getElementById("about-me").style.display = "none";
        document.getElementById("my-skills").style.display = "flex";
        document.getElementById("btn-skills").classList.add("active");
        document.getElementById("btn-about").classList.remove("active");
    }

    // Button event listeners
    document.getElementById("btn-about").addEventListener("click", showAboutMe);
    document.getElementById("btn-skills").addEventListener("click", showMySkills);

    // Nav link event listeners
    document.querySelector('a[href="#about-me"]').addEventListener("click", function(e) {
        e.preventDefault();
        showAboutMe();
        // Scroll to the section
        document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector('a[href="#my-skills"]').addEventListener("click", function(e) {
        e.preventDefault();
        showMySkills();
        // Scroll to the section
        document.getElementById("my-skills").scrollIntoView({ behavior: "smooth" });
    });

    // ... rest of your existing code ...
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
