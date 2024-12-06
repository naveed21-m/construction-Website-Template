document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about-first-row-col", {
    opacity: 0,
    y: 150,
    duration: 0.8,
  });

  gsap.from(".about-second-row-col", {
    opacity: 0,
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-second-row",
      start: "top bottom",
    },
  });

  gsap.from(".third-row-col", {
    opacity: 0,
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".third-row-col",
      // start: "center center", // Start when the center of `.third-row` reaches the center of the viewport
      end: " center",
    },
  });
  gsap.from(".last-container-about", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".last-container-about",
      // start: "center center", // Start when the center of `.third-row` reaches the center of the viewport
      end: "center",
    },
  });

});