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

  gsap.from(".animate-heading-project-section", {

    opacity: 0,
    y: 20,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-heading-project-section",
      start: "top bottom",
    
    },
  });
  gsap.from(".animate-img-project-section", {
    opacity: 0,
    y: 60,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-img-project-section",
      start: "top bottom",
    },
  });
 // Animate .img-slider1 from an initial state and then to a final state
gsap.fromTo(".img-slider1", 
  { // from
    opacity: 0,
    x: -60
  }, 
  { // to
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.1
  }
);

// Animate .img-slider3 from an initial state and then to a final state
gsap.fromTo(".img-slider3", 
  { // from
    opacity: 0,
    x: 60
  }, 
  { // to
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.1
  }
);
gsap.fromTo(".slider-img-index", 
  { // from
    opacity: 0,
   
  }, 
  { // to
    opacity: 1,
    duration: 0.5,
    delay: 0.1
  }
);

// Animate .img-slider2 from an initial state and then to a final state
gsap.fromTo(".img-slider2", 
  { // from
    opacity: 0,
    y: 120
  }, 
  { // to
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.1
  }
);

  gsap.from(".animate-plan-index-interior", {
    opacity: 0,
    x: -70,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-plan-index-interior",
      start: "top bottom",
    },
  });
  gsap.from(".animate-plan-index-exterior", {
    opacity: 0,
    x: 70,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-plan-index-interior",
      start: "top bottom",
    },
  });
  gsap.from(".animate-plan-index-center", {
    opacity: 0,
    y: 70,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-plan-index-interior",
      start: "top bottom",
    },
  });
  gsap.from(".animate-slider-index-counter", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".img-slider3",
      start: "top bottom",
    },
  });
  gsap.fromTo(".animate-icon-coial-index", 
    { // from
      opacity: 0,
      x: -30
    }, 
    { // to
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".img-slider3",
        start: "top bottom",
        // Optionally, add markers to see the trigger point during debugging:
        // markers: true
      }
    }
  );
  
  gsap.from(".index-latest-project-animation-heading", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".index-latest-project-animation-heading",
      start: "top bottom",
    },
  });
  gsap.from(".index-latest-project-animation-img", {
    opacity: 0,
    x: 250,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".index-latest-project-animation-heading",
      start: "top bottom",
    },
  });
  gsap.fromTo(".animate-heading1-first-section-index", 
    { // from
      opacity: 0,
      y: 70
    }, 
    { // to
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".img-slider3",
        start: "top bottom",
        // Optionally, you can also set markers to debug the trigger points
        // markers: true
      }
    }
  );
  
  gsap.from(".animate-heading1-second-section-index", {
    opacity: 0,
    y: 70,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-heading1-second-section-index",
      start: "top bottom",
    },
  });
  gsap.from(".animate-button-second-section-index", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-heading1-second-section-index",
      start: "top bottom",
    },
  });
  gsap.from(".animate-heading-project-section2", {

    opacity: 0,
    y: 20,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-heading-project-section2",
      start: "top bottom",
    
    },
  });
  gsap.from(".animate-img-project-section2", {
    opacity: 0,
    y: 60,
    duration: 1,
    delay:0.1,
    scrollTrigger: {
      trigger: ".animate-img-project-section2",
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
  gsap.from(".index-howWork-headig-animate", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-howWork-headig-animate",
      end: " center",
    },
  });
  gsap.from(".index-howWork-card1-animate", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-howWork-headig-animate",
      end: " center",
    },
  });
  gsap.from(".index-howWork-card2-animate", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-howWork-headig-animate",
      end: " center",
    },
  });
  gsap.from(".index-howWork-card3-animate", {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-howWork-headig-animate",
      end: " center",
    },
  });
  gsap.from(".index-unique-img1-animate", {
    opacity: 0,
    x: -150,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-unique-img1-animate",
      end: " center",
    },
  });
  gsap.from(".index-unique-img2-animate", {
    opacity: 0,
    x: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-unique-img1-animate",
      end: " center",
    },
  });
  gsap.from(".index-unique-heading-animate", {
    opacity: 0,
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".index-unique-img1-animate",
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


