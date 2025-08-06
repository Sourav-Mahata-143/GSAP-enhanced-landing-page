
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".navbar", { y: -100, duration: 1, ease: "power4.out" });

  gsap.to(".cta-button", {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });

  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      }
    });
  });
});
