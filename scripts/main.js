// Smooth scrolling for navigation links
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
});

// Theme toggle functionality
// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Set the new theme
    root.setAttribute("data-theme", newTheme);

    // Update the toggle button icon
    themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";

    // Save the theme preference in localStorage
    localStorage.setItem("theme", newTheme);
});

// Apply the saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    root.setAttribute("data-theme", savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
});


// Highlight active section in the navbar during scrolling
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and tab contents
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));
  
      // Add active class to clicked button and corresponding tab content
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
  

  document.getElementById("email-button").addEventListener("click", () => {
    const toast = document.getElementById("toast");
    toast.style.display = "block";

    // Hide after 3 seconds
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  });

  