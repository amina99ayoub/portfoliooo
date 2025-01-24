gsap.registerPlugin(ScrollTrigger);

gsap.to(".lines-container", {
    gap: "2px", // Shrink the space between lines until it reaches 2px (adjust this value as needed)
    duration: 1, // Transition duration for smooth effect
    scrollTrigger: {
        trigger: ".lines-container", // Target the container
        start: "top center", // Start shrinking when container enters viewport
        end: "bottom center", // End shrinking when container exits viewport
        scrub: true, // Smoothly transition the spacing on scroll
    },
});

// Add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Max scroll value
    const scrollPercent = scrollPosition / maxScroll; // Calculate scroll percentage

    // Calculate new gradient brightness/darkness
    let brightness = Math.floor(15 + scrollPercent * 80); // Start lighter, then increase as user scrolls

    // After halfway through the page, darken the background
    if (scrollPercent > 0.5) {
        brightness = Math.floor(95 - (scrollPercent - 0.5) * 100); // Darken after middle scroll
    }

    // Calculate final color values for the gradient
    const darknessStart = Math.floor(brightness);
    const darknessEnd = Math.floor(brightness + 15);

    // Update the background gradient
    document.body.style.background = `linear-gradient(135deg, rgb(${darknessStart}, ${darknessStart}, ${darknessStart}), rgb(${darknessEnd}, ${darknessEnd}, ${darknessEnd}))`;
});

