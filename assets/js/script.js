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
      end: " center",
    },
  });
  gsap.from(".blog-content-animation-class", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".blog-content-animation-class",
      end: "start",
    },
  });
  gsap.from(".service-fifth-row-col", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".service-fifth-row-col",
      end: "start",
    },
  });
  gsap.from(".fourth-service-row-animation", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".fourth-service-row-animation",
      end: "start",
    },
  });
  gsap.from(".service-second-row-col", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".service-second-row-col",
      end: "start",
    },
  });
  gsap.from(".left-animation", {
    opacity: 0,
    x: -250,
    duration: 1,
    scrollTrigger: {
      trigger: ".left-animation",
      end: "start",
    },
  });
  gsap.from(".down-animation", {
    opacity: 0,
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".down-animation",
      end: "start",
    },
  });
  gsap.from(".right-animation", {
    opacity: 0,
    x: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".right-animation",
      end: "start",
    },
  });
  gsap.from(".blog-first-row-image", {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
      trigger: ".blog-first-row-image",
      end: "start",
    },
  });



});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-page-main-colom .service-first-heading", {
  opacity: 0,
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-page-main-colom",
    start: "top 80%",
  },
});

gsap.from(".about-page-main-colom .service-first-para ", {
  opacity: 0,
  y: 200,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".about-page-main-colom",
    start: "top 80%",
  },
});

gsap.from(".about-page-main-colom .service-first-row-image", {
  opacity: 0,
  y: 200,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".about-page-main-colom",
    start: "top 80%",
  },
});