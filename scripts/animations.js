document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing function
      once: true, // Animation occurs only once per element
    });
  
    // Initialize tsParticles
    if (document.getElementById("particles-js")) {
      tsParticles.load("particles-js", {
        particles: {
          number: { value: 50 }, // Number of particles
          size: { value: 3 }, // Particle size
          move: { enable: true, speed: 1.5 }, // Enable particle movement
          color: { value: "00000" }, // Particle color
          links: {
            enable: true, // Enable lines between particles
            distance: 150, // Distance for lines
            color: "#ffffff", // Line color
            opacity: 0.5, // Line opacity
            width: 1, // Line width
          },
        },
        background: {
          color: { value: "#1a202c" }, // Background color (matches your hero)
        },
      });
    }
  
    // GSAP Animations
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero p", { duration: 1, delay: 0.5, y: 50, opacity: 0 });
    gsap.from(".nav-links li", {
      duration: 0.5,
      delay: 1,
      opacity: 0,
      stagger: 0.2, // Staggered animation for navbar items
    });
  });
  